chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({id:"locaarc-selection",title:"Search selection with loca.arc",contexts:["selection"]});
});
chrome.contextMenus.onClicked.addListener(async (info) => {
  if(info.menuItemId!=="locaarc-selection"||!info.selectionText)return;
  await chrome.storage.local.set({selectedText:info.selectionText});
  // The extension popup can be opened by clicking its toolbar icon.
  // Browsers do not consistently allow an extension to force-open its popup from a context-menu click.
});