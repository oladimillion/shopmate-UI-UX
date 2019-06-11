(async function () {
  const controller = app.Controller;
  const path = "pages/view-item";
  const cssPath = "pages/view-item/css";
  const catalogueCssPath = "pages/home/css";
  const partialsPath = "pages/view-item/partials";
  controller.addStyle(cssPath);
  controller.addStyle(cssPath, "index.md");
  controller.addStyle(cssPath, "review");
  controller.addStyle(cssPath, "review.sm");
  controller.addStyle(catalogueCssPath, "catalogue");
  controller.addStyle(catalogueCssPath, "catalogue.md");
  controller.addStyle(catalogueCssPath, "catalogue.sm");
  const addReview = await app.Template(partialsPath, "add-review");
  const viewReview = await app.Template(partialsPath, "view-review");
  const itemData = await app.Template(partialsPath, "item-data");
  const itemPhoto = await app.Template(partialsPath, "item-photo");
  const preference = await app.Template(partialsPath, "preference");
  const review = (await app.Template(partialsPath, "review"))
    .replace("{{AddReview}}", addReview)
    .replace("{{ViewReview}}", viewReview);
  const itemInfo = (await app.Template(partialsPath, "item-info"))
    .replace("{{ItemPhoto}}", itemPhoto)
    .replace("{{ItemData}}", itemData);
  const template = (await app.Template(path))
    .replace("{{ItemInfo}}", itemInfo)
    .replace("{{Review}}", review)
    .replace("{{Preference}}", preference);
  controller.render(template);
})();
