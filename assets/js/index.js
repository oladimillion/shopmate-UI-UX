(async function () {
  const controller = app.Controller;
  const cssPath = "assets/css";
  controller.addStyle(cssPath);
  controller.addStyle(cssPath, "radio-button");
  controller.addStyle(cssPath, "square-button");
  controller.addStyle(cssPath, "radio-label");
  controller.addStyle(cssPath, "card");
  controller.addStyle(cssPath, "card.md");
  controller.addStyle(cssPath, "card.sm");
  controller.addStyle(cssPath, "hotzone");
  controller.addStyle(cssPath, "hotzone.md");
  controller.addStyle(cssPath, "checkbox-label");
  controller.addStyle(cssPath, "panel-section");
  controller.addStyle(cssPath, "horizontal-spacing");
  controller.addStyle(cssPath, "price-currency");
  controller.addStyle(cssPath, "select-quantity");
  controller.addStyle(cssPath, "round-button");

  controller.view("partials/header");
  controller.view("partials/footer");

  switch(window.location.pathname) {
    case "/":
    case "/home":
      controller.view("pages/home");
      break;
    case "/view-item":
      controller.view("pages/view-item");
      break;
    default:
      controller.view("pages/home");
      break;
  }
})();
