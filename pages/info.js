const chromebook_sn_barcode = document.getElementById('chromebook_sn_barcode');
const chromebook_sn = document.getElementById('chromebook_sn');
const chromebook_assetid = document.getElementById('chromebook_assetid');
const chromebook_location = document.getElementById('chromebook_location');
const chromebook_deviceid = document.getElementById('chromebook_deviceid');

function onRecieveSerialNumber(value)
{
    chromebook_sn_barcode.textContent = value;
    chromebook_sn.textContent = value;
    
}
function onRecieveAssetID(value)
{
    chromebook_assetid.textContent = value;
}

function onRecieveLocation(value)
{
    chromebook_location.textContent = value;
}

function onRecieveDeviceID(value)
{
    chromebook_deviceid.textContent = value;
}

parent.sendExtensionMessage("getDeviceSerialNumber", onRecieveSerialNumber);
parent.sendExtensionMessage("getDeviceAssetId", onRecieveAssetID);
parent.sendExtensionMessage("getDeviceLocation", onRecieveLocation);
parent.sendExtensionMessage("getDirectoryDeviceId", onRecieveDeviceID);