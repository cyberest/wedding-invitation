// 맵 어플리케이션 앱링크 (URL scheme)

/**
 * 호출 운영체제 확인
 * https://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
 function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

// https://stackoverflow.com/questions/24571548/javascript-how-to-detect-if-the-custom-url-scheme-is-available-or-not-availabl
function redirectMap(service) {

    if (service == "naver") {
        var url = "nmap://place?lat=37.521299&lng=126.983642&name=용산가족공원&appname=invitation-221015.web.app";
        var script = document.createElement("script"); 

        script.onload = function() { 
            document.location = url;
        }
        script.onerror = function() { 
            var osname = getMobileOperatingSystem();
            if (osname == "iOS") {
                document.location = "http://itunes.apple.com/app/id311867728?mt=8";
            } else {
                if (osname == "Android") {
                    document.location = "intent://place?lat=37.521299&lng=126.983642&name=용산가족공원&appname=invitation-221015.web.app#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end";
                } else {
                    return
                }
            }
        }
        script.setAttribute("src", url); 
        document.getElementsByTagName("head")[0].appendChild(script);
    
    } else { // Kakao
        var url = "kakaomap://place?id=17556513";
        try {
            document.location = url;
        } catch (e) {
            var osname = getMobileOperatingSystem();
            if (osname == "iOS") {
                document.location = "https://itunes.apple.com/app/id304608425?mt=8";
            } else {
                if (osname == "Android") {
                    document.location = "market://details?id=net.daum.android.map";;
                } else {
                    return
                }
            }
        }
    }
}

// console.log(getMobileOperatingSystem())