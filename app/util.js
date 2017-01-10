/**
 * Created by Görkem on 10.1.2017.
 */
var Util = (function () {
    function Util() {
    }
    Util.prototype.functions = function () {
        return {
            Math: {
                factorial: function (arg) {
                    var result = 1;
                    if (arg === 0 || arg === 1) {
                        return result;
                    }
                    else {
                        while (arg > 0) {
                            result *= arg;
                            arg -= 1;
                        }
                    }
                    return result;
                }
            },
            String: {
                repeat: function (str, times) {
                    var tempStr = "";
                    while (times > 0) {
                        tempStr += " " + str;
                        times -= 1;
                    }
                    return tempStr.trim();
                }
            },
            Wait: function (second) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve(true);
                    }, second * 1000);
                });
            }
        };
    };
    ;
    return Util;
}());
