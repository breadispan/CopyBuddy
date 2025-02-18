chrome.action.onClicked.addListener(async () => {
    try {
        let tabs = await chrome.tabs.query({});
        let urls = tabs.map(tab => tab.url).join("\n");

        console.log(" URLs retrieved:", urls);

        let [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });

        if (activeTab && activeTab.id && activeTab.url.startsWith("http")) {
            console.log("Attempting to send message to content.js...");

            chrome.tabs.sendMessage(activeTab.id, {
                action: "copyToClipboard",
                data: urls
            }, response => {
                if (chrome.runtime.lastError) {
                    console.warn("Unable to send message. Injecting content.js...");
                    chrome.scripting.executeScript({
                        target: { tabId: activeTab.id },
                        files: ["content.js"]
                    }, () => {
                        console.log("`content.js` manually injected.");
                        chrome.tabs.sendMessage(activeTab.id, {
                            action: "copyToClipboard",
                            data: urls
                        });
                    });
                } else {
                    console.log("Response received from content.js:", response);
                }
            });
        } else {
            console.warn(" `content.js` does not run on this page.");
        }

        console.log("Attempting to show notification...");

        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/icon.png",
            title: "CopyBuddy",
            message: `Copied ${tabs.length} links to the clipboard.`,
            buttons: [{ title: "OK" }],
            priority: 2
        }, (notificationId) => {
            if (chrome.runtime.lastError) {
                console.error(" Error displaying notification:", chrome.runtime.lastError);
            } else {
                console.log("Notification displayed with ID:", notificationId);
            }
        });

    } catch (err) {
        console.error("Error in background.js:", err);
    }
});
