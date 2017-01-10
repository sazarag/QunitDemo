/**
 * Created by Görkem on 10.1.2017.
 */

class Util {
    functions() {
        return {
            Math: {
                factorial: (arg) => {
                    let result = 1;
                    if (arg === 0 || arg === 1) {
                        return result;
                    } else {
                        while (arg > 0) {
                            result *= arg;
                            arg -= 1;
                        }
                    }
                    return result;
                }
            },
            String: {
                repeat: (str, times) => {
                    let tempStr = "";
                    while (times > 0) {
                        tempStr += " " + str;
                        times -= 1;
                    }

                    return tempStr.trim();
                }
            },
            Wait(second) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(true);
                    }, second * 1000)
                })
            }
        }
    };
}

