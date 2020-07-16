console.log('content script installed!');

// 監聽右鍵點擊事件,將被點擊的元素存在 clickedItem 中
var clickedItem = null;
document.addEventListener('contextmenu', event => {
  clickedItem = event.target;
})

// 監聽訊息傳遞事件
chrome.runtime.onMessage.addListener(function (request, sender, response) {
  
  // 設定要改變的文字內容
  // contextMenuItems are injected from manifest.json
  contextMenuItems.forEach(function(contextMenuItem){
    if(contextMenuItem.id == request.contextMenuId){
      clickedItem.value = contextMenuItem.title;
    }
  })


  // 設定要改變的文字內容
  // if('invoice-barcode' == request.contextMenuId){        
  //   clickedItem.value = '/ABCDEFG';

  // }else if('address' == request.contextMenuId){    
  //   clickedItem.value = 'AAABBBCCCDDD';
  // }
})


