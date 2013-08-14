import gt = module("classes/Greeter");


export class AppMain {
    public run() {
        var el = document.getElementById('content');
        var greeter = new gt.Greeter(el);
        greeter.start();
    }
}
