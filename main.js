function createMobileErrorLayer() {
   const mobile_error_layer = document.createElement('div');
   mobile_error_layer.className = "mobile-error";
   mobile_error_layer.innerHTML = `
<p>Sorry, but this site is designed for desktop use, a mobile version may be worked on soon.</p>
<p>This message will change if one is planned.</p>
<br>
<p>- Xhaelan</p>
<p style="font-size: 30px;">© 2026 Xhaelan Voyde | MIT License</p>`;
   document.body.prepend(mobile_error_layer);
}

const navigator = document.createElement('div');
navigator.className = "navigator";
document.body.prepend(navigator);

function loadXhaelanHeadImage() {
   const xhaelan_skin_image_source = "https://api.mineatar.io/face/6548d6ffd38945ea97152d43aba5cd58?scale=64"
   const xhaelan_head_image_container = document.createElement('div');
   const xhaelan_head_image = document.createElement('img');
   xhaelan_head_image.src = xhaelan_skin_image_source
   xhaelan_head_image_container.className = "xhaelan-head-image-container";
   navigator.prepend(xhaelan_head_image_container);
   xhaelan_head_image_container.prepend(xhaelan_head_image);
}

function loadXhaelanHeadImage_forIcon() {
   const head_icon_element = document.createElement('link');
   head_icon_element.href = "https://api.mineatar.io/face/6548d6ffd38945ea97152d43aba5cd58?scale=64";
   head_icon_element.type = "image/png";
   head_icon_element.rel = "icon";
   document.head.appendChild(head_icon_element);
}

function addNavigatorLink(name, url) {navigator.innerHTML += `<a href="${url}"> •${name}• </a>`;}

createMobileErrorLayer();
addNavigatorLink("Home", "https://xhaelanvoyde.github.io");
addNavigatorLink("Platforms", "https://xhaelanvoyde.github.io/platforms");
addNavigatorLink("Learn Commands", "https://xhaelanvoyde.github.io/learn");
addNavigatorLink("Minecraft", "https://xhaelanvoyde.github.io/minecraft");
addNavigatorLink("Hytale", "https://xhaelanvoyde.github.io/hytale");
loadXhaelanHeadImage();
loadXhaelanHeadImage_forIcon();