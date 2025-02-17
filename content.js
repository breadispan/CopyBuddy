console.log("✅ CopyBuddy content script executed on this page.");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("📩 Message received in content.js:", message); 

    if (message.action === "copyToClipboard") {
        console.log("🔄 Attempting to copy to clipboard...");
        navigator.clipboard.writeText(message.data)
            .then(() => {
                console.log("📋 URLs copied to clipboard.");
                sendResponse({ status: "success" });
            })
            .catch(err => {
                console.error("❌ Error copying:", err);
                sendResponse({ status: "error", message: err });
            });
    }
    return true; 
});
