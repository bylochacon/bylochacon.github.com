// Created by iWeb 2.0.4 local-build-20100305

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWEmptyStroke(),stroke_2:new IWStrokeParts([{rect:new IWRect(-4,4,8,293),url:'Bibliographies_of_the_Great_War_files/stroke.png'},{rect:new IWRect(-4,-4,8,8),url:'Bibliographies_of_the_Great_War_files/stroke_1.png'},{rect:new IWRect(4,-4,681,8),url:'Bibliographies_of_the_Great_War_files/stroke_2.png'},{rect:new IWRect(685,-4,8,8),url:'Bibliographies_of_the_Great_War_files/stroke_3.png'},{rect:new IWRect(685,4,8,293),url:'Bibliographies_of_the_Great_War_files/stroke_4.png'},{rect:new IWRect(685,297,8,8),url:'Bibliographies_of_the_Great_War_files/stroke_5.png'},{rect:new IWRect(4,297,681,8),url:'Bibliographies_of_the_Great_War_files/stroke_6.png'},{rect:new IWRect(-4,297,8,8),url:'Bibliographies_of_the_Great_War_files/stroke_7.png'}],new IWSize(689,301)),stroke_0:new IWEmptyStroke(),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Bibliographies_of_the_Great_War_files/Bibliographies_of_the_Great_WarMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
