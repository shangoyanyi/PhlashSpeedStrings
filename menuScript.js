chrome.contextMenus.onClicked.addListener(function (info, tab){  
  chrome.tabs.sendMessage(tab.id, {'contextMenuId': info.menuItemId});
})

// 產生右鍵選單項目
// contextMenuItems are injected from manifest.json
contextMenuItems.forEach(function(contextMenuItem){
  chrome.contextMenus.create(contextMenuItem);
})

// var contextMenuItem = {
//   "id": "invoice-barcode",
//   "title": "手機條碼",  
//   "contexts":["editable"] // 限定只在可輸入的項目中顯示
// };

// var contextMenuItem2 = {
//   "id": "address",
//   "title": "地址",  
//   "contexts":["editable"] // 限定只在可輸入的項目中顯示
// };
// chrome.contextMenus.create(contextMenuItem);
// chrome.contextMenus.create(contextMenuItem2);






