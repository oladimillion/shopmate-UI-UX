(async function () {
  const controller = app.Controller;
  const path = "partials/footer";
  controller.addStyle(path)
  controller.addStyle(path, "index.md");
  const template = await app.Template(path);
  controller.render(template, "main__footer");
})();
