const chromebook_sn_barcode = document.getElementById('chromebook_sn_barcode');
const chromebook_sn = document.getElementById('chromebook_sn');
const chromebook_assetid = document.getElementById('chromebook_assetid');
const chromebook_location = document.getElementById('chromebook_location');
const chromebook_deviceid = document.getElementById('chromebook_deviceid');

function onRecieveSerialNumber(value)
{
    chromebook_sn_barcode.dataset.barcode = value;
    chromebook_sn.textContent = value;
    renderBarcodes();
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


// Code128 barcode
function toSetC(text) {
    return text.match(/\d{2}/g).map((ascii, index) => {
      var codeC = Number(ascii);
      var charCode = codeC > 94 ? codeC + 100 : codeC + 32;
        return String.fromCharCode(charCode)
    }).join('');
  }
  
  function checkSum128(data, startCode) {
    var sum = startCode;
    for (var i = 0; i < data.length; i++) {
      var code = data.charCodeAt(i);
        var value = code > 199 ? code - 100 : code - 32;
      sum += (i + 1) * (value);
    }
    
    var checksum = (sum % 103) + 32;
    if (checksum > 126) checksum = checksum + 68 ;
    return String.fromCharCode(checksum);
  }
  
  function encodeToCode128(text, codeABC = "B") {
    var startCode = String.fromCharCode(codeABC.toUpperCase().charCodeAt() + 138);
    var stop = String.fromCharCode(206);
    
    text = codeABC == 'C' && toSetC(text) || text;
  
    var check = checkSum128(text, startCode.charCodeAt(0) - 100);
  
    text = text.replace(" ", String.fromCharCode(194));
  
    return startCode + text + check + stop;
  }
  
  function renderBarcodes() {
    var barcodeElements = document.querySelectorAll(".barcode");
    var codes = [];
    barcodeElements.forEach((e) => {
      var code = e.attributes["data-barcode"]?.value;
      if (!code) return;
      var set = e.attributes["data-set"]?.value;
      e.innerHTML = encodeToCode128(code, set);
    });
  }