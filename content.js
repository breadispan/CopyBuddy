console.log("✅ CopyBuddy content script se ejecutó en esta página.");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("📩 Mensaje recibido en content.js:", message); 

    if (message.action === "copyToClipboard") {
        console.log("🔄 Intentando copiar al portapapeles...");
        navigator.clipboard.writeText(message.data)
            .then(() => {
                console.log("📋 URLs copiadas al portapapeles.");
                sendResponse({ status: "success" });
            })
            .catch(err => {
                console.error("❌ Error al copiar:", err);
                sendResponse({ status: "error", message: err });
            });
    }
    return true; 
});

