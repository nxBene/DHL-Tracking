### DEUTSCHE VERSION

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


### US VERSION

  javascript:(function() {
        var clipboardText = window.prompt("Please insert your Tracking ID:");
        if (clipboardText) {
            clipboardText = clipboardText.trim();
            if (/^\d{10,39}$/.test(clipboardText)) {
                clipboardText = encodeURIComponent(clipboardText);
                window.location.href = "https://www.dhl.com/de-en/home/tracking/tracking-parcel.html?submit=1&tracking-id=" + clipboardText;
            } else {
                alert("Insert a valid tracking id!");
            }
        }
    })();
