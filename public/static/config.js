'use strict';

// CHANGE ME
window.CONFIG = {
  latitude: 0
, longitude: 0
, gmaps_key: 'AIzaSyCxsFBVQV26npjbU7NHXj5Hho0Q3y51O0A'
, requireLogin: true
, heartbeatInterval: 5000 // in ms
  // distance in meters to travel between heartbeats
, pulseRadius: 25
  // number of concentric rings to expand during search
  // (keep this small - less than 10 - it gets really big really fast)
, ringSteps: 8
};

// Auto-detect language to use
window.document.documentElement.lang = 'ru';
[ 'de', 'en', 'fr', 'pt_br', 'ru', 'zh_cn', 'zh_hk' ].some(function (lang) {
  if (window.navigator.language.match(lang)) {
    window.document.documentElement.lang = lang;
    return true;
  }
});
