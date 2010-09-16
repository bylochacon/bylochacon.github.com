// Created by iWeb 2.0.4 local-build-20100916

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-3,3,6,180),url:'Holocaust_files/stroke.png'},{rect:new IWRect(-3,-3,6,6),url:'Holocaust_files/stroke_1.png'},{rect:new IWRect(3,-3,269,6),url:'Holocaust_files/stroke_2.png'},{rect:new IWRect(272,-3,7,6),url:'Holocaust_files/stroke_3.png'},{rect:new IWRect(272,3,7,180),url:'Holocaust_files/stroke_4.png'},{rect:new IWRect(272,183,7,6),url:'Holocaust_files/stroke_5.png'},{rect:new IWRect(3,183,269,6),url:'Holocaust_files/stroke_6.png'},{rect:new IWRect(-3,183,6,6),url:'Holocaust_files/stroke_7.png'}],new IWSize(275,186)),stroke_1:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Holocaust_files/HolocaustMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('Holocaust_files','shapeimage_1','0');fixupIECSS3Opacity('id5');fixupIECSS3Opacity('id6');applyEffects()}
function onPageUnload()
{Widget.onunload();}
