define(["require", "exports", "app/classes/Greeter"], function(require, exports, __gt__) {
    var gt = __gt__;

    window.onload = function () {
        var el = document.getElementById('content');
        var greeter = new gt.Greeter(el);
        greeter.start();
    };
});
//@ sourceMappingURL=app.js.map
