//const STATIC_EXTENSION_ID = 'oibbgeingpoelpkhjokoihlkmfkcfinm'; 
const STATIC_EXTENSION_ID = 'oomloaccipelccklgnhcfbiladadkbhp';

const extension_version = document.getElementById('versionHolder');

const chromebook_sn_barcode = document.getElementById('chromebook_sn_barcode');
const chromebook_sn = document.getElementById('chromebook_sn');
const chromebook_assetid = document.getElementById('chromebook_assetid');
const chromebook_user = document.getElementById('chromebook_user');
const chromebook_location = document.getElementById('chromebook_location');
const chromebook_deviceid = document.getElementById('chromebook_deviceid');


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

function onRecieveSerialNumber(value)
{
  chromebook_sn_barcode.textContent = value;
  chromebook_sn.textContent = value;
  
}
function onRecieveAssetID(value)
{
  chromebook_assetid.textContent = value;
}

function onRecieveUser(value)
{
  chromebook_user.textContent = value;
}

function onRecieveLocation(value)
{
  chromebook_location.textContent = value;
}

function onRecieveDeviceID(value)
{
  chromebook_deviceid.textContent = value;
}


sendExtensionMessage("getExtensionVersion", onRecieveExtensionVersion);

sendExtensionMessage("getDeviceSerialNumber", onRecieveSerialNumber);
sendExtensionMessage("getDeviceAssetId", onRecieveAssetID);
sendExtensionMessage("getDeviceUser", onRecieveUser);
sendExtensionMessage("getDeviceLocation", onRecieveLocation);
sendExtensionMessage("getDirectoryDeviceId", onRecieveDeviceID);