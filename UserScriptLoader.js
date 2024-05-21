if (document.domain == "bloxd.io" || document.domain == "kirka.io") {
    let script1 = document.createElement('script');
    script1.src = `https://karaage-2.github.io/CrosshairMod/CrosshairMod.js`;
    script1.type = 'text/javascript';
    document.body.appendChild(script1);
}
if (document.domain == "kirka.io") {
    const cssLink = "https://karaage-2.github.io/KirkaCSS/NizzQCustom.css";
    document.addEventListener("DOMContentLoaded", () => {

        let cssLinkElem = document.createElement("link");
        cssLinkElem.href = cssLink;
        cssLinkElem.rel = "stylesheet";

        document.head.append(cssLinkElem);

    });
}
