function mobileRedirect(){
    // const af_dp = "roblox%3A%2F%2FplaceId%3D7682549746%26launchData%3D1";
    // const af_web_dp = "https%3A%2F%2Fwww.roblox.com%2Fgames%2Fstart%3FlaunchData%3D1%26placeId%3D7682549746";
    // const domain = "https://ro.blox.com/Ebh5?";

    window.open("https://ro.blox.com/Ebh5?af_dp=roblox%3A%2F%2FplaceId%3D7682549746%26launchData%3D1&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2Fstart%3FlaunchData%3D1%26placeId%3D7682549746");
}
function desktopRedirect(){
    const desktopLink = "https://www.roblox.com/games/start?launchData=1&placeId=7682549746";

    window.location.replace(desktopLink);
}