// Created by iWeb 2.0.4 local-build-20100306

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),stroke_1:new IWEmptyStroke(),stroke_2:new IWStrokeParts([{rect:new IWRect(-4,4,8,89),url:'Links_Regarding_Europe_files/stroke.png'},{rect:new IWRect(-4,-4,8,8),url:'Links_Regarding_Europe_files/stroke_1.png'},{rect:new IWRect(4,-4,681,8),url:'Links_Regarding_Europe_files/stroke_2.png'},{rect:new IWRect(685,-4,8,8),url:'Links_Regarding_Europe_files/stroke_3.png'},{rect:new IWRect(685,4,8,89),url:'Links_Regarding_Europe_files/stroke_4.png'},{rect:new IWRect(685,93,8,8),url:'Links_Regarding_Europe_files/stroke_5.png'},{rect:new IWRect(4,93,681,8),url:'Links_Regarding_Europe_files/stroke_6.png'},{rect:new IWRect(-4,93,8,8),url:'Links_Regarding_Europe_files/stroke_7.png'}],new IWSize(689,97)),stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Links_Regarding_Europe_files/Links_Regarding_EuropeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
