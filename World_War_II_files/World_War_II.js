// Created by iWeb 2.0.4 local-build-20100921

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWEmptyStroke(),stroke_0:new IWStrokeParts([{rect:new IWRect(-3,3,6,243),url:'World_War_II_files/stroke.png'},{rect:new IWRect(-3,-3,6,6),url:'World_War_II_files/stroke_1.png'},{rect:new IWRect(3,-3,234,6),url:'World_War_II_files/stroke_2.png'},{rect:new IWRect(237,-3,6,6),url:'World_War_II_files/stroke_3.png'},{rect:new IWRect(237,3,6,243),url:'World_War_II_files/stroke_4.png'},{rect:new IWRect(237,246,6,7),url:'World_War_II_files/stroke_5.png'},{rect:new IWRect(3,246,234,7),url:'World_War_II_files/stroke_6.png'},{rect:new IWRect(-3,246,6,7),url:'World_War_II_files/stroke_7.png'}],new IWSize(240,249))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('World_War_II_files/World_War_IIMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');fixupIECSS3Opacity('id6');applyEffects()}
function onPageUnload()
{Widget.onunload();}
