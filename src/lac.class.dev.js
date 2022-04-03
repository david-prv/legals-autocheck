class LAC {

    /**
     * Constructor
     *
     * @param {Array} keywords
     * @param {Boolean} notifications
     * @param {Boolean} debug
     */
    constructor(keywords, notifications = false, debug = false) {
        this._keywords = keywords;
        this._notifications = notifications;
        this._debug = debug;

        this._labels = document.getElementsByTagName("Label");
        this._inputs = document.getElementsByTagName("Input");
        this._potentialAGB = [];
    }

    /*
     * Run LAC main function
     */
    run() {
        // loop through inputs to find stand-alone inputs
        for(let m = 0; m < this._inputs.length; m++) {
            if(this._debug) console.log("[DEBUG]", this._inputs[m]);
            let input = this._inputs[m];
            if(input.nextSibling.nodeName == '#text') {
                for(let n = 0; n < this._keywords.length; n++) {
                    ((input.type == 'checkbox' || input.type == 'radio') && input.nextSibling.textContent.indexOf(this._keywords[n]) !== -1) ? input.click() : null;
                }
            }
        }
        
        // loop through labels to find agb checkbox
        for(let i = 0; i < this._labels.length; i++) {
            let lbl = this._labels[i];
            let value = (lbl.textContent !== undefined && lbl.textContent !== null) ? lbl.textContent.toLowerCase() : "";
            for(let j = 0; j < this._keywords.length; j++) {
                if(this._debug) console.log("[DEBUG]", i, lbl, value, j, this._keywords[j]);
                (value.indexOf(this._keywords[j]) !== -1) ? ((!this._potentialAGB.includes(lbl)) ? this._potentialAGB.push(lbl) : null) : null;
            }
        }

        // get for-tags
        for(let k = 0; k < this._potentialAGB.length; k++) {
            if(this._debug) console.log("[DEBUG]", this._potentialAGB[k]);
            let forId = this._potentialAGB[k].getAttribute("for");
            let forEl = document.getElementById(forId);
            forEl.click();
        }
        
        if(this._notifications) alert(`Es wurde${(this._potentialAGB.length > 1) ? "n" : ""} ${this._potentialAGB.length} AGB Checkbox${(this._potentialAGB.length > 1) ? "en" : ""} gefunden und ausgewählt!`);
    }
}
