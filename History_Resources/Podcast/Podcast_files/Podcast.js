// Created by iWeb 2.0.4 local-build-20100305

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-4,4,8,293),url:'Podcast_files/stroke_8.png'},{rect:new IWRect(-4,-4,8,8),url:'Podcast_files/stroke_9.png'},{rect:new IWRect(4,-4,681,8),url:'Podcast_files/stroke_10.png'},{rect:new IWRect(685,-4,8,8),url:'Podcast_files/stroke_11.png'},{rect:new IWRect(685,4,8,293),url:'Podcast_files/stroke_12.png'},{rect:new IWRect(685,297,8,8),url:'Podcast_files/stroke_13.png'},{rect:new IWRect(4,297,681,8),url:'Podcast_files/stroke_14.png'},{rect:new IWRect(-4,297,8,8),url:'Podcast_files/stroke_15.png'}],new IWSize(689,301))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://bylochacon.com/History_Resources/Podcast/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Podcast_files/PodcastMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
