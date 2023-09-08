# DHL tracking Lesezeichen

## Instalation

1) Kopiere den code aus dem code Block.
2) Erstelle ein neues Lesezeichen.  [Anleitung hier](https://page.nxbene.repl.co/tut/bookmark)
3) Füge den code jetzt unter URL bei dem Lesezeichen ein

### Deutsche Version

```javascript
javascript:(function() {
        var clipboardText = window.prompt("Bitte fügen Sie DHL trackingcode ein:");
        if (clipboardText) {
            clipboardText = clipboardText.trim();
            if (/^\d{10,39}$/.test(clipboardText)) {
                clipboardText = encodeURIComponent(clipboardText);
                window.location.href = "https://www.dhl.de/de/privatkunden/kundenkonto/meine-sendungen.html?piececode=" + clipboardText;
            } else {
                alert("Dies ist kein gültiger DHL Trackingcode!");
            }
        }
    })();

```
### US version 
Go to [bookmark.js](https://github.com/nxBene/DHL-Tracking/blob/main/bookmark.js) and Use the code from US Version



## Sicherheit

Ist der code ein Virus oder sammelt unbemekt meine daten?

Nein, der code fragt lediglich nach der Trackingnummer und fügt diese zur dhl sendungsverfolgungs URL hinzu. Weder die Sendungsnummer noch andere Daten werden an mich oder andere Personen Versendet

### Dies kann jederzeit durch [Chat GBT](https://chat.openai.com/) überprüft werden.


## Lizenz

[MIT](https://choosealicense.com/licenses/mit/)
