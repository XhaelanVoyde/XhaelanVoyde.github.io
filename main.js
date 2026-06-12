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
   const xhaelan_skin_image_source = "https://textures.minecraft.net/texture/a7aa31956eb7ea96746028fec3dc314765fe588a5558a3e25b0d31183bab6036"
   const xhaelan_head_image_container = document.createElement('div');
   const xhaelan_head_image = document.createElement('img');
   xhaelan_head_image.src = xhaelan_skin_image_source
   xhaelan_head_image_container.className = "xhaelan-head-image-container";
   navigator.prepend(xhaelan_head_image_container);
   xhaelan_head_image_container.prepend(xhaelan_head_image);
}

function addNavigatorLink(name, url) {navigator.innerHTML += `<a href="${url}"> •${name}• </a>`;}

createMobileErrorLayer();
addNavigatorLink("Home", "index.html");
addNavigatorLink("Platforms", "platforms.html");
addNavigatorLink("Learn Commands", "404.html");
addNavigatorLink("Minecraft", "minecraft.html");
addNavigatorLink("Hytale", "404.html");
loadXhaelanHeadImage();