// Created by iWeb 2.0.4 local-build-20100510

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWEmptyStroke(),stroke_2:new IWEmptyStroke(),stroke_0:new IWEmptyStroke(),stroke_3:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Films_files/FilmsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id6');applyEffects()}
function onPageUnload()
{Widget.onunload();}
