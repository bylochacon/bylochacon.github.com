// Created by iWeb 2.0.4 local-build-20100306

function createMediaStream_id3()
{return IWCreatePhotocast("http://bylochacon.com/History_Resources/Photos_files/rss.xml",true,true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://bylochacon.com/History_Resources',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://bylochacon.com/History_Resources',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(180,180),new IWSize(180,28),new IWSize(216,223),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-5,5,10,170),url:'Photos_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Photos_files/stroke_1.png'},{rect:new IWRect(5,-5,170,10),url:'Photos_files/stroke_2.png'},{rect:new IWRect(175,-5,10,10),url:'Photos_files/stroke_3.png'},{rect:new IWRect(175,5,10,170),url:'Photos_files/stroke_4.png'},{rect:new IWRect(175,175,10,10),url:'Photos_files/stroke_5.png'},{rect:new IWRect(5,175,170,10),url:'Photos_files/stroke_6.png'},{rect:new IWRect(-5,175,10,10),url:'Photos_files/stroke_7.png'}],new IWSize(180,180)),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-4,4,8,192),url:'Photos_files/stroke_8.png'},{rect:new IWRect(-4,-4,8,8),url:'Photos_files/stroke_9.png'},{rect:new IWRect(4,-4,192,8),url:'Photos_files/stroke_10.png'},{rect:new IWRect(196,-4,8,8),url:'Photos_files/stroke_11.png'},{rect:new IWRect(196,4,8,192),url:'Photos_files/stroke_12.png'},{rect:new IWRect(196,196,8,8),url:'Photos_files/stroke_13.png'},{rect:new IWRect(4,196,192,8),url:'Photos_files/stroke_14.png'},{rect:new IWRect(-4,196,8,8),url:'Photos_files/stroke_15.png'}],new IWSize(200,200)),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Photos_files/PhotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();applyEffects()
initializeMediaStream_id3()}
function onPageUnload()
{Widget.onunload();}
