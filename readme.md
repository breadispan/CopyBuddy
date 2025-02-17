# CopyBuddy - Chrome Extension

CopyBuddy is a lightweight Chrome extension that allows users to quickly copy the URLs of all open tabs in the browser.

## 🚀 Features
- 📋 **Copies all open tab URLs** to the clipboard.
- 🔄 **Works with a single click** from the extension icon.
- 🔔 **Shows a notification** after copying the URLs.
- 🛠 **Injects `content.js` dynamically** if needed.

## 🛠 Installation
1. **Download the source code** or clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/CopyBuddy.git
   ```
2. Open **Google Chrome** and navigate to:
   ```
   chrome://extensions/
   ```
3. Enable **Developer mode** (top right).
4. Click **"Load unpacked"** and select the project folder.
5. The extension is now installed!

## 🎯 How to Use
1. Click the CopyBuddy extension icon.
2. All **open tab URLs** will be copied to your clipboard.
3. A notification will confirm the action.

## 📂 Project Structure
```
CopyBuddy/
│── icons/                # Extension icons
│── background.js         # Handles tab management and clipboard actions
│── content.js            # Runs in the web page context to handle clipboard copy
│── manifest.json         # Chrome extension configuration
│── README.md             # Documentation
```

## ⚡ Permissions Explained
- **`tabs`** → Allows the extension to access open tabs.
- **`scripting`** → Used to inject `content.js` dynamically if needed.
- **`notifications`** → Displays a confirmation notification.

## 🛠 Troubleshooting
- **Clipboard copy doesn't work?**  
  - Make sure the site allows clipboard access.
  - Try refreshing the page before clicking the extension.

- **Extension not working?**  
  - Open the **Chrome Developer Console** (`Ctrl + Shift + J` on Windows/Linux or `Cmd + Option + J` on macOS).
  - Check for error messages.

## 📄 License
This project is released under the **MIT License**.

---

💡 Created with ❤️ by **Pan**. Feel free to contribute! 🚀
