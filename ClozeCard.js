"use strict";

(function() {
    function ClozeCard(text, cloze) {
        if (text.indexOf(cloze) !== -1) {
            if (this instanceof ClozeCard) {
                this.fullText = text;
                this.cloze = cloze;
                this.partial = text.replace(cloze, "...");
            } else {
                return new ClozeCard(text, cloze);
            }
        } else {
            console.log("you answer isn't in in the card's full text")
        }
    }

    module.exports = {
        ClozeCard
    };

})();
