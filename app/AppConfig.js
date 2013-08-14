/// <reference path="../modules/require.d.ts" />
/// <reference path="AppMain.ts" />
require.config({});

require(['AppMain'], function (main) {
    var appMain = new main.AppMain();
    appMain.run();
});
//@ sourceMappingURL=AppConfig.js.map
