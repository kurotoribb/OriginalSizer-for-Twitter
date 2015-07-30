// ==UserScript==
// @name OriginalSizer-for-Twitter
// @namespace originalsizerfortwitter
// @description Twitterのアップロードされた画像をオリジナルサイズで表示するやつ
// @include http://pbs.twimg.com/media/*
// @include https://pbs.twimg.com/media*
// ==/UserScript==

var uri;
uri = document.URL;

if (document.URL.match(':orig'))
{
}
else
{
	if(document.URL.match(':large'))
	{
		uri = uri.replace(':large',':orig');
	}
	else if(document.URL.match('png') || document.URL.match('jpg') || document.URL.match('gif'))
	{
    	uri += ':orig';
    }
    location.href = uri;
}
