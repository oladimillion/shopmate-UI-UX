(function () {
  const Template = (async (path, name="index") => {
    return await app.Loader(`../../${path}/${name}.html`);
  });
  window.app = window.app || {};
  window.app.Template = Template;
})();
