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
  const navSection = await app.Template(partialsPath, "nav-section");
  const colorSection = await app.Template(partialsPath, "color-section");
  const sizeSection = await app.Template(partialsPath, "size-section");
  const brandSection = await app.Template(partialsPath, "brand-section");
  const cardList = await app.Template(partialsPath, "card-list");
  const priceRange = await app.Template(partialsPath, "price-range");
  const hotzone = await app.Template(partialsPath, "hotzone");
  const sidebar = (await app.Template(partialsPath, "sidebar"))
    .replace("{{ColorSection}}", colorSection)
    .replace("{{SizeSection}}", sizeSection)
    .replace("{{PriceRange}}", priceRange)
    .replace("{{BrandSection}}", brandSection);
  const template = (await app.Template(path))
    .replace("{{NavSection}}", navSection)
    .replace("{{Sidebar}}", sidebar)
    .replace("{{CardList}}", cardList)
    .replace("{{Hotzone}}", hotzone);
  controller.render(template);

  function initializeSlider() {
    const slider = document.getElementById('slider');
    const rangeValue = [20, 80];
    const setRangeValue = (([min, max]) => {
      qs("#min-price").innerText = parseInt(min);
      qs("#max-price").innerText = parseInt(max);
    });
    setRangeValue(rangeValue);
    noUiSlider.create(slider, {
      start: rangeValue,
      step: 1,
      connect: true,
      range: {
        'min': 1,
        'max': 100
      }
    });
    slider.noUiSlider.on('slide', function(range) {
      setRangeValue(range);
    });
  }

  initializeSlider();
})();
