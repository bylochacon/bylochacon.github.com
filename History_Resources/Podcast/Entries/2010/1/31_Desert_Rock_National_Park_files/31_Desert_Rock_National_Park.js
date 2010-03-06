// Created by iWeb 2.0.4 local-build-20100306

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id6" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="300" height="316" style="height: 316px; left: 380px; position: absolute; top: 22px; width: 300px; z-index: 1; "><param name="src" value="../../../../Media/200250987-001_c.mp4" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id6" type="video/quicktime" width="300" height="316" style="height: 316px; left: 380px; position: absolute; top: 22px; width: 300px; z-index: 1; "><param name="src" value="31_Desert_Rock_National_Park_files/200250987-001_c.jpg"/><param name="target" value="myself"/><param name="href" value="../../../../../Media/200250987-001_c.mp4"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id6" type="video/quicktime" width="300" height="316" data="../../../../Media/200250987-001_c.mp4" style="height: 316px; left: 380px; position: absolute; top: 22px; width: 300px; z-index: 1; "><param name="src" value="../../../../Media/200250987-001_c.mp4"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-4,4,8,89),url:'31_Desert_Rock_National_Park_files/stroke.png'},{rect:new IWRect(-4,-4,8,8),url:'31_Desert_Rock_National_Park_files/stroke_1.png'},{rect:new IWRect(4,-4,681,8),url:'31_Desert_Rock_National_Park_files/stroke_2.png'},{rect:new IWRect(685,-4,8,8),url:'31_Desert_Rock_National_Park_files/stroke_3.png'},{rect:new IWRect(685,4,8,89),url:'31_Desert_Rock_National_Park_files/stroke_4.png'},{rect:new IWRect(685,93,8,8),url:'31_Desert_Rock_National_Park_files/stroke_5.png'},{rect:new IWRect(4,93,681,8),url:'31_Desert_Rock_National_Park_files/stroke_6.png'},{rect:new IWRect(-4,93,8,8),url:'31_Desert_Rock_National_Park_files/stroke_7.png'}],new IWSize(689,97))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('31_Desert_Rock_National_Park_files/31_Desert_Rock_National_ParkMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');Widget.onload();fixAllIEPNGs('../../../../Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
