(function () {
  class Controller {
    addScript(path, name="index") {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `${path}/${name}.js`;
      document.body.append(script);
    }
    addStyle(path, name="index") {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `${path}/${name}.css`;
      document.head.append(link);
    }
    render(view, target="root") {
      document.getElementById(target).innerHTML = view;
    }
    view(path) {
      this.addScript(path);
    }
  }
  window.app = window.app || {};
  window.app.Controller = new Controller();
})();
