<p align="center">
  <img src="https://addons-media.operacdn.com/media/extensions/65/115665/4.13.6138-rev1/icons/icon_64x64_61be8d1fe87710ac0c320d28a05f0cbc.png"></img>
</p>

# LAC: Legals-Autocheck
*A TamperMonkey Script*

## Introduction
Welcome to this repository. This very small project is based on what my father once told me:  
"It is very annoying to click on these TOS checkboxes every time, especially when we have no other choice.  
Can't you do a macro or something..."  
(Something like that... I no longer know the exact wording. Please don't sue me, Dad.)

This small browser-side script will try to automatically check common TOS checkboxes/radioboxes on every HTTP or HTTPS website.  
Yep.. That's the whole thing. Additionally the script doesn't need to get updated manually since it obtains the fresh code  
from this repository everytime it gets loaded.

## Installation
### 1) Install TamperMonkey-Addon
Find a compatible TamperMonkey Version for YOUR browser.  
Here is a list for the most-common ones:  
- [Download for Opera](https://addons.opera.com/de/extensions/details/tampermonkey-beta/)
- [Download for Firefox](https://addons.mozilla.org/de/firefox/addon/tampermonkey/)
- [Download for Chrome / Vivaldi](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=de)
- [Download for Safari](https://apps.apple.com/de/app/tampermonkey/id1482490089?mt=12)

### 2) Install the plugin
Download the [Plugin File](https://github.com/david-prv/legals-autocheck/blob/main/plugin/legals_auto_check.user.js) from this repository,  
located in ``/plugin``. Import the JS file into TamperMonkey or copy&paste the code manually into a new UserScript.  
Here's a small tutorial on ["How to add new scripts to TamperMonkey"](https://www.tampermonkey.net/faq.php#Q102).

### 3) Finished, yay
That's it. From now on, the plugin should work in the background fully automatically.
