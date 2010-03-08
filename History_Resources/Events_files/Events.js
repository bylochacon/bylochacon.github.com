// Created by iWeb 2.0.4 local-build-20100308

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke(),stroke_1:new IWStrokeParts([{rect:new IWRect(-5,5,10,58),url:'Events_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Events_files/stroke_1.png'},{rect:new IWRect(5,-5,165,10),url:'Events_files/stroke_2.png'},{rect:new IWRect(170,-5,10,10),url:'Events_files/stroke_3.png'},{rect:new IWRect(170,5,10,58),url:'Events_files/stroke_4.png'},{rect:new IWRect(170,63,10,11),url:'Events_files/stroke_5.png'},{rect:new IWRect(5,63,165,11),url:'Events_files/stroke_6.png'},{rect:new IWRect(-5,63,10,11),url:'Events_files/stroke_7.png'}],new IWSize(175,68))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Events_files/EventsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('Events_files','shapeimage_1','0');IMpreload('Events_files','shapeimage_3','0');IMpreload('Events_files','shapeimage_4','0');IMpreload('Events_files','shapeimage_4','1');IMpreload('Events_files','shapeimage_4','2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
