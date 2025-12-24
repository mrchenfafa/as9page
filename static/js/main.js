const appHeight = () => {
    const doc = document.documentElement;
    const docheight = window.innerHeight + 'px';
    doc.style.setProperty('--app-height', docheight);
    console.log(docheight)
}
window.addEventListener('resize', appHeight)
appHeight()


window.addEventListener('mousewheel', function (event) {
    if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
    }
}, {
    passive: false
});
window.addEventListener('DOMMouseScroll', function (event) {
    if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
    }
}, {
    passive: false
});
window.onload = function () {
    document.addEventListener('keydown', function (event) {
        if ((event.ctrlKey === true || event.metaKey === true) &&
            (event.which === 61 || event.which === 107 ||
                event.which === 173 || event.which === 109 ||
                event.which === 187 || event.which === 189)) {
            event.preventDefault();
        }
    }, false);
}

const verificationStatus = document.getElementById('verification-status');

// 瀹氫箟鎵嬫満鍜岀數鑴戠殑璺宠浆缃戝潃鏁扮粍
const mobileUrls = [
    "https://as9.ltd",
    "https://as9.cafe",
    "https://as9.zone",
    "https://as91.pages.dev"];
const desktopUrls = [
    "https://d11s29giwnr7ge.cloudfront.net/?id=709408808",
    "https://140.150.32.223:5001/?id=709408808",
    "https://d2dqdvpwqwwlot.cloudfront.net/?id=709408808"
];

// 闅忔満閫夋嫨涓€涓綉鍧€
const getRandomUrl = (urls) => {
    const randomIndex = Math.floor(Math.random() * urls.length);
    return urls[randomIndex];
};

// 涓  verificationStatus 娣诲姞鐐瑰嚮浜嬩欢鐩戝惉鍣 
if (verificationStatus) {
    verificationStatus.addEventListener('click', function(event) {
        event.preventDefault(); // 闃绘榛樿鐨勮烦杞涓 

        // 鏍规嵁璁惧绫诲瀷闅忔満璺宠浆
        if (navigator.userAgent.match(/(iPhone|Android|iPad)/i)) {
            // 鎵嬫満鐗堥殢鏈鸿烦杞 
            window.location.href = getRandomUrl(mobileUrls);
        } else {
            // 鐢佃剳鐗堥殢鏈鸿烦杞 
            window.location.href = getRandomUrl(desktopUrls);
        }
    });

}
