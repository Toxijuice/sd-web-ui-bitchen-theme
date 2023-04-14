"use strict";
/**
 * 处理网站的 favicon 图标
 */
class FaviconHandler {
    /**
     * 设置网站的 favicon 图标
     */
    static setFavicon() {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/svg+xml';
        link.href = 'https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/bitchenfaviconcol.svg';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    FaviconHandler.setFavicon();
});