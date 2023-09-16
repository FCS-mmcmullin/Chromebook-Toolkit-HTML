const STATIC_EXTENSION_ID = 'oibbgeingpoelpkhjokoihlkmfkcfinm'; // found from chrome extensions page of chrome web store.
async function callExtensionAPI(method)
{
  chrome.runtime.sendMessage(STATIC_EXTENSION_ID, {
    methodName: method
  });
};

callExtensionAPI("getDeviceSerialNumber").then(()=>{console.log("GOT IT")})
callExtensionAPI("getDeviceAssetId");
callExtensionAPI("getDeviceAnnotatedLocation");
callExtensionAPI("getDirectoryDeviceId");
