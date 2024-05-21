if (document.domain = "bloxd.io" || document.domain = "kirka.io") {
    let script1 = document.createElement('script');
    script1.src = `https://cdn.rawgit.com/karaage-2/CrosshairMod/main/CrosshairMod.js`;
    script1.type = 'text/javascript';
    document.body.appendChild(script1);
}
if (document.domain = "kirka.io") {
    let style1 = document.createElement('style');
    style1.src = `https://cdn.rawgit.com/karaage-2/KirkaCSS/main/NizzQCustom.css`;
    style1.type = 'text/css';
    document.body.appendChild(style1);
}
