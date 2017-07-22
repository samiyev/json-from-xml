var combain = new require('./combain').Parser({explicitRoot: false, explicitArray: false, mergeAttrs: true});

module.exports = {
    parse: function (xml) {
        var returned = null;
        combain.parseString(xml, (error, result) => {
            returned = error || result
        });
        return returned;
    }
};

module.exports.Promise = {
    default: function (xml) {
        var returned = null;
        combain.parseString(xml, (error, result) => {
            returned = error || result
        });
        return returned;
    },
    parse: function (xml) {
        return new Promise((done, fail) => {
            var result = this.default(xml)
            if (result instanceof Error) {
                return fail(result);
            }
            done(result);
        });
    }
};



