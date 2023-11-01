//const STATIC_EXTENSION_ID = 'ahlofnmnhajbnioaiecojmkgogpfmnkj'; 
const STATIC_EXTENSION_ID = 'oomloaccipelccklgnhcfbiladadkbhp';

const extension_version = document.getElementById('versionHolder');

async function sendExtensionMessage(message, sendResponse)
{
  return await chrome.runtime.sendMessage(STATIC_EXTENSION_ID, {
    message: message
  }, sendResponse);
};

function onRecieveExtensionVersion(value)
{
  extension_version.textContent = value;
}

function restart()
{
  sendExtensionMessage("restart");
}

sendExtensionMessage("getExtensionVersion", onRecieveExtensionVersion);
