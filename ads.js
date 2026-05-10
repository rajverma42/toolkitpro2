// ============================================
// TOOLKITPRO - CENTRALIZED ADS FILE
// ============================================

// Google AdSense Auto Ads Loader
function loadGoogleAutoAds() {
    (function() {
        var script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
    })();
}

// Inline Ad (Content ke beech wala)
function getInlineAd() {
    return `
        <div class="ad-box" style="margin: 20px 0; text-align: center; padding: 12px; background: #f5f5f5; border-radius: 12px;">
            <div style="font-size: 11px; color: #999; margin-bottom: 6px;">ADVERTISEMENT</div>
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="1234567890"
                data-ad-format="auto"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
        </div>
    `;
}

// Top Banner Ad
function getTopBannerAd() {
    return `
        <div class="top-banner" style="background: #f0f0f0; text-align: center; padding: 10px; border-radius: 10px; margin-bottom: 20px;">
            <div style="font-size: 10px; color: #999;">Ad Space</div>
            <ins class="adsbygoogle"
                style="display:inline-block;width:728px;height:90px"
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="1111111111"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
        </div>
    `;
}

// Bottom Banner Ad
function getBottomBannerAd() {
    return `
        <div class="bottom-banner" style="background: #f0f0f0; text-align: center; padding: 10px; border-radius: 10px; margin-top: 30px;">
            <div style="font-size: 10px; color: #999;">Advertisement</div>
            <ins class="adsbygoogle"
                style="display:inline-block;width:728px;height:90px"
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="2222222222"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
        </div>
    `;
}

// Sidebar Ad
function getSidebarAd() {
    return `
        <div class="sidebar-ad" style="margin: 15px 0; text-align: center;">
            <div style="font-size: 10px; color: #999;">Sponsored</div>
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="3333333333"
                data-ad-format="rectangle"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
        </div>
    `;
}

// Fallback Ad (Jab koi ad na ho)
function getFallbackAd() {
    return `
        <div style="background: linear-gradient(135deg, #1e6bff, #ff8c42); color: white; padding: 15px; text-align: center; border-radius: 12px; margin: 15px 0;">
            <p style="margin: 0;">✨ Try ToolkitPro Premium - No Ads ✨</p>
            <small style="font-size: 12px;">Upgrade for ad-free experience</small>
        </div>
    `;
}

// Sab functions ko globally available karo
window.ToolkitProAds = {
    loadGoogleAutoAds: loadGoogleAutoAds,
    getInlineAd: getInlineAd,
    getTopBannerAd: getTopBannerAd,
    getBottomBannerAd: getBottomBannerAd,
    getSidebarAd: getSidebarAd,
    getFallbackAd: getFallbackAd
};

console.log('✅ ToolkitPro Ads Loaded');
