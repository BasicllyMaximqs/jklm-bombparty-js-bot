# jklm-bombparty-js-bot
a single-file javascript which automates input in bombparty.

### how to use
simply copy the contents and paste in any web-browser console, most likely
not working with IE (Internet Explorer).

https://jklm.fun/ - create a new lobby and pick "bombparty".
#### Inspect Element -> Cursor Select -> Click on the overall canvas.
#### search for `<div class="syllable"></div>` (should be inherited by `<div class="round"></div>`).

#### tested on firefox and chrome. interval is at 250~ish ms.
#### changable at bottom of code (`}, 250);`)
#### change this value varying on your pc's/browser's performance.
