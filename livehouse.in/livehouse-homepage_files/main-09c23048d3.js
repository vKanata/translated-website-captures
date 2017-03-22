!function n(e,r,o){function a(i,g){if(!r[i]){if(!e[i]){var s="function"==typeof require&&require;if(!g&&s)return s(i,!0);if(t)return t(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[i]={exports:{}};e[i][0].call(l.exports,function(n){var r=e[i][1][n];return a(r?r:n)},l,l.exports,n,e,r,o)}return r[i].exports}for(var t="function"==typeof require&&require,i=0;i<o.length;i++)a(o[i]);return a}({1:[function(n,e,r){var o,a;I18n.locale=gon.locale,a=angular.fromJson(gon.waveBanners),o=angular.module("Teaser",["Header","Footer","ng-rails-csrf","ui.bootstrap","ngSanitize","LocalStorageModule","pasvaz.bindonce","localeImage","fallbackImage","mobileAppHandler"]),o.directive("compileTemplate",["$compile","$parse",function(n,e){return{link:function(r,o,a){var t,i;return i=e(a.ngBindHtml),t=function(){return(i(r)||"").toString()},r.$watch(t,function(){return n(o,null,-9999)(r)})}}}]),o.controller("Announcement",["$scope",function(n){return n.showingAnnouncement=!0}]),o.controller("RecommendedPrograms",["$scope","$filter",function(n,e){return n.gaTrackArticle=function(n){if(gon.gaqOn)return ga("send","event","homepage",n)},n.gaTrackRecommendedEvent=function(n,e){if(gon.gaqOn)return ga("send","event","homepage",n,e)},n.gaTrackRecommendedProgramMobile=function(n){if(gon.gaqOn)return ga("send","event","app","點擊節目預告",n)},n.gaTrackMoreMobileProgram=function(){if(gon.gaqOn)return ga("send","event","app","點擊看更多","節目表")}}]),o.controller("RecommendedChannels",["$timeout","$http","$window","$scope","localStorageService",function(n,e,r,o,a){return o.locale=gon.locale,o.signedIn=gon.signedIn,o.user=gon.currentUser,o.gaTrackPrev=function(){if(gon.gaqOn)return ga("send","event","homepage","上一頁","熱門頻道")},o.gaTrackNext=function(){if(gon.gaqOn)return ga("send","event","homepage","下一頁","熱門頻道")},o.gaTrackList=function(n){if(gon.gaqOn)return ga("send","event","homepage","點選類別",n)},o.gaTrackChannelList=function(n,e){var r,o;if(null==e&&(e="index"),gon.gaqOn)return o=gon.currentUserHashCode||"NA",r=I18n.t("activerecord.values.category.name."+n,{locale:"zh-TW"})+"tab","index"!==e&&(r="更多-"+r),ga("send","event","homepage",r,o)},o.gaTrackSeeMoreIndex=function(){if(gon.gaqOn)return ga("send","event","homepage","看更多","首頁")},o.showAlert=function(){if(!gon.verified)return o.triggerNotice={flag:!0}},o.signedIn=function(){return gon.signedIn},o.userIsVerified=function(){return gon.signedIn&&gon.verified},o.gaTrackClickLive=function(n,e){if(gon.gaqOn)return n?ga("send","event","homepage","LIVE頻道",e):ga("send","event","homepage","推薦頻道")},o.gaTrackMobileList=function(n){if(gon.gaqOn)return ga("send","event","mobile首頁","直播列表",n)}}]),o.controller("BannerCarouse",["$scope","$compile","$sce",function(n,e,r){var o,t,i,g,s,c,l;if(n.bannerInterval=5e3,n.randomChannel=function(){return(11e3+(Math.round(1e4*Math.random())%5+1)).toString()},n.toTrustHtml=function(n){return r.trustAsHtml(n)},n.slides=a,a.length>0)for(g in a)l=a[g],l.html=r.trustAsHtml(l.html);else for(t=[],gon.signedIn?t.push('<div class="intro-block1"><div class="intro1"><h1>加入LIVEhouse<br>一起看直播</h1><a class="banner-btn-fb intro-btn-fb" href="/channel/'+gon.currentUserHashCode+'">'+I18n.t("welcome.js.banner_3_broadcast_now")+"</a></div></div>"):t.push('<div class="intro-block1"><div class="intro1"><h1>加入LIVEhouse<br>一起看直播</h1><a class="banner-btn-fb intro-btn-fb" href="https://livehouse.in/users/auth/facebook" ng-click="gaTrackRegisterFB()">'+I18n.t("welcome.js.banner_3_register_by_fb")+'</a><a class="banner-btn-signup intro-btn-signup" href="https://livehouse.in/users/sign_up" ng-click="gaTrackRegister()"><span>></span>'+I18n.t("welcome.js.banner_3_register_by_email")+"</a></div></div>"),t.push('<div class="intro-block2"><div class="intro2"><h1>'+I18n.t("welcome.js.banner_2_using_mobile")+"<br>"+I18n.t("welcome.js.banner_2_no_missing_show")+'</h1><a class="banner-btn-android" href="https://play.google.com/store/apps/details?id=com.ikala.livehouse&hl=zh_TW" ng-click="gaTrackGooglePlay()" target="_blank"><i class="banner-download1"></i>'+I18n.t("welcome.js.banner_2_android_download")+'</a><a class="banner-btn-ios" href="https://itunes.apple.com/tw/app/livehouse.in/id912290138" ng-click="gaTrackAppleStore()" target="_blank"><i class="banner-download2"></i>'+I18n.t("welcome.js.banner_2_iphone_download")+"</a></div></div>"),i=0,s=t.length;i<s;i++)o=t[i],o=r.trustAsHtml(o),n.slides.push({html:o});return c=gon.currentUserHashCode?gon.currentUserHashCode:"NA",n.gaTrackGooglePlay=function(){if(gon.gaqOn)return ga("send","event","homepage","GooglePlay下載",c)},n.gaTrackAppleStore=function(){if(gon.gaqOn)return ga("send","event","homepage","AppleStore下載",c)},n.gaTrackRegister=function(){if(gon.gaqOn)return ga("send","event","點擊註冊","首頁表單區註冊",document.referrer)},n.gaTrackRegisterFB=function(){if(gon.gaqOn)return ga("send","event","點擊註冊","首頁表單區FB",document.referrer)},n.gaTrackWave=function(n,e){if(gon.gaqOn)return ga("send","event","wave",n,e)}}]),o.controller("PartnerLogo",["$scope",function(n){return n.gaTrackPartnerLogo=function(n){if(gon.gaqOn)return ga("send","event","homepage","合作夥伴",n)}}]),$(document).on("ready page:load",function(){return angular.bootstrap($("#main"),["Teaser"])})},{}]},{},[1]);