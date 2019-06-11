(async function () {
  const controller = app.Controller;
  const path = "partials/header";
  controller.addStyle(path)
  controller.addStyle(path, "index.md");
  controller.addStyle(path, "index.sm");
  let template = await app.Template(path);
  let navBarLight = await app.Template(`${path}/navbar-light`);
  let navBarDark = await app.Template(`${path}/navbar-dark`);
  template = template
    .replace("{{NavBarLight}}", navBarLight)
    .replace("{{NavBarDark}}", navBarDark);
  controller.render(template, "main__header");
})();
