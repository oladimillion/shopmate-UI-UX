(async function () {
  const controller = app.Controller;
  const path = "pages/home";
  const cssPath = "pages/home/css";
  const partialsPath = "pages/home/partials";
  controller.addStyle(cssPath, "nav-section");
  controller.addStyle(cssPath, "sidebar");
  controller.addStyle(cssPath, "sidebar.sm");
  controller.addStyle(cssPath, "catalogue");
  controller.addStyle(cssPath, "catalogue.md");
  controller.addStyle(cssPath, "catalogue.sm");
  controller.addStyle(cssPath, "ui-slider");
  controller.addStyle(cssPath, "newsletter");
  controller.addStyle(cssPath, "newsletter.md");
  controller.addStyle(cssPath, "featured");
  const navSection = await app.Template(partialsPath, "nav-section");
  const colorSection = await app.Template(partialsPath, "color-section");
  const sizeSection = await app.Template(partialsPath, "size-section");
  const brandSection = await app.Template(partialsPath, "brand-section");
  const cardList = await app.Template(partialsPath, "card-list");
  const priceRange = await app.Template(partialsPath, "price-range");
  const hotzone = await app.Template(partialsPath, "hotzone");
  const newsletter = await app.Template(partialsPath, "newsletter");
  const featured = await app.Template(partialsPath, "featured");
  const sidebar = (await app.Template(partialsPath, "sidebar"))
    .replace("{{ColorSection}}", colorSection)
    .replace("{{SizeSection}}", sizeSection)
    .replace("{{PriceRange}}", priceRange)
    .replace("{{BrandSection}}", brandSection);
  const template = (await app.Template(path))
    .replace("{{NavSection}}", navSection)
    .replace("{{Sidebar}}", sidebar)
    .replace("{{CardList}}", cardList)
    .replace("{{Hotzone}}", hotzone)
    .replace("{{Featured}}", featured)
    .replace("{{Newsletter}}", newsletter);
  controller.render(template);

  function main() {
    InitializeSlider();
    app.AddToCart();
  }

  function InitializeSlider() {
    const slider = document.getElementById('slider');
    const rangeValue = [20, 80];
    const setRangeValue = (([min, max]) => {
      qs("#min-price").innerText = min | 0;
      qs("#max-price").innerText = max | 0;
    });
    setRangeValue(rangeValue);
    noUiSlider.create(slider, {
      start: rangeValue,
      step: 1,
      connect: true,
      range: {
        'min': 1,
        'max': 100,
      }
    });
    slider.noUiSlider.on('slide', (range) => {
      setRangeValue(range);
    });
  }

  qs("#add__to__cart__btn__back__face")
    .addEventListener("click", () => {
      const parent = qs("#back__face__card");
      const img = qs("img", parent);
      app.Animate(img.parentNode, parent);
    });
  main();
})();
