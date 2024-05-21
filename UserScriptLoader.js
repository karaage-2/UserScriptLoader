if (document.domain = "bloxd.io" || document.domain = "kirka.io") {
    let script1 = document.createElement('script');
    script1.src = `https://cdn.rawgit.com/karaage-2/CrosshairMod/main/CrosshairMod.js`;
    script1.type = 'text/javascript';
    document.body.appendChild(script1);
}
if (document.domain = "kirka.io") {
    let cssLinkElem = document.createElement("link");
    cssLinkElem.href = "https://cdn.rawgit.com/karaage-2/KirkaCSS/main/NizzQCustom.css";
    cssLinkElem.rel = "stylesheet";
    document.head.append(cssLinkElem);
}
