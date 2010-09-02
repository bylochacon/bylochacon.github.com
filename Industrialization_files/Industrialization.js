// Created by iWeb 2.0.4 local-build-20100901

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-4,4,8,153),url:'Industrialization_files/stroke.png'},{rect:new IWRect(-4,-4,8,8),url:'Industrialization_files/stroke_1.png'},{rect:new IWRect(4,-4,232,8),url:'Industrialization_files/stroke_2.png'},{rect:new IWRect(236,-4,8,8),url:'Industrialization_files/stroke_3.png'},{rect:new IWRect(236,4,8,153),url:'Industrialization_files/stroke_4.png'},{rect:new IWRect(236,157,8,8),url:'Industrialization_files/stroke_5.png'},{rect:new IWRect(4,157,232,8),url:'Industrialization_files/stroke_6.png'},{rect:new IWRect(-4,157,8,8),url:'Industrialization_files/stroke_7.png'}],new IWSize(240,161)),stroke_1:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Industrialization_files/IndustrializationMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');fixupIECSS3Opacity('id6');applyEffects()}
function onPageUnload()
{Widget.onunload();}
