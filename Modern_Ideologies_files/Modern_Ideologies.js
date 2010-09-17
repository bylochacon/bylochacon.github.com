// Created by iWeb 2.0.4 local-build-20100917

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWEmptyStroke(),stroke_0:new IWStrokeParts([{rect:new IWRect(-3,3,6,244),url:'Modern_Ideologies_files/stroke.png'},{rect:new IWRect(-3,-3,6,6),url:'Modern_Ideologies_files/stroke_1.png'},{rect:new IWRect(3,-3,188,6),url:'Modern_Ideologies_files/stroke_2.png'},{rect:new IWRect(191,-3,7,6),url:'Modern_Ideologies_files/stroke_3.png'},{rect:new IWRect(191,3,7,244),url:'Modern_Ideologies_files/stroke_4.png'},{rect:new IWRect(191,247,7,6),url:'Modern_Ideologies_files/stroke_5.png'},{rect:new IWRect(3,247,188,6),url:'Modern_Ideologies_files/stroke_6.png'},{rect:new IWRect(-3,247,6,6),url:'Modern_Ideologies_files/stroke_7.png'}],new IWSize(194,250))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Modern_Ideologies_files/Modern_IdeologiesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');fixupIECSS3Opacity('id6');applyEffects()}
function onPageUnload()
{Widget.onunload();}
