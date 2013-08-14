define(["require", "exports", "classes/Greeter"], function(require, exports, __gt__) {
    var gt = __gt__;

    var AppMain = (function () {
        function AppMain() {
        }
        AppMain.prototype.run = function () {
            var el = document.getElementById('content');
            var greeter = new gt.Greeter(el);
            greeter.start();
        };
        return AppMain;
    })();
    exports.AppMain = AppMain;
});
//@ sourceMappingURL=AppMain.js.map
