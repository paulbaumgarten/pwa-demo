# PWA Demo

A basic proof of concept demonstration for creating a Progressive Web Application (PWA)

PWA's are Javascript web front-ends that can be "installed" onto a user device and will, for all practical purposes, behave as an installed app. They are the easiest way to get a multi-device "app" up and running without having to write native code.

## Requirements

The basic requirements ([source](https://web.dev/install-criteria/)):

In Chrome, your Progressive Web App must meet the following criteria before it will fire the `beforeinstallprompt` event and show the in-browser install promotion:

* The web app is not already installed
* Meets a user engagement heuristic
* Be served over HTTPS
* Includes a [Web App Manifest](https://web.dev/add-manifest/) that includes:
    * `short_name` or `name`
    * `icons` - must include a 192px and a 512px icon
    * `start_url`
    * `display` - must be one of fullscreen, standalone, or minimal-ui
    * Note: `prefer_related_applications` must not be present, or be false
* Registers a service worker with a functional fetch handler
* Starting in mid-2021, the service worker must return a valid response when the device is offline, for example an [offline fallback page](https://web.dev/offline-fallback-page/)

## Manifest

For documentation on your `manifest.webmanifest` file, see https://web.dev/add-manifest/

## Useful references

* [Google PWA documents @ web.dev](https://web.dev/progressive-web-apps/) - learn what makes a Progressive Web App special, how they can affect your business, and how to build them
* [Debugging tools for PWA](https://developers.google.com/web/ilt/pwa/tools-for-pwa-developers)
* [Mozilla docs service worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
* [Mozilla docs progress web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
* [Service Worker Cookbook](https://serviceworke.rs/) - a collection of working, practical examples of using service workers in modern web sites
   * [Notification push example](https://serviceworke.rs/push-simple.html)

