import gt = module("app/classes/Greeter");

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new gt.Greeter(el);
    greeter.start();
};