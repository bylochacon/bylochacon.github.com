// Created by iWeb 2.0.4 local-build-20100304

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-4,4,8,194),url:'Fun_files/stroke.png'},{rect:new IWRect(-4,-4,8,8),url:'Fun_files/stroke_1.png'},{rect:new IWRect(4,-4,681,8),url:'Fun_files/stroke_2.png'},{rect:new IWRect(685,-4,8,8),url:'Fun_files/stroke_3.png'},{rect:new IWRect(685,4,8,194),url:'Fun_files/stroke_4.png'},{rect:new IWRect(685,198,8,8),url:'Fun_files/stroke_5.png'},{rect:new IWRect(4,198,681,8),url:'Fun_files/stroke_6.png'},{rect:new IWRect(-4,198,8,8),url:'Fun_files/stroke_7.png'}],new IWSize(689,202))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Fun_files/FunMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');detectBrowser();adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
