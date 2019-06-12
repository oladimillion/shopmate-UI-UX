(function() {
  function Loader(path, responseType="text") {
    return fetch(path)
      .then(res => res[responseType]())
      .catch(error => {
        console.log("data could not be loaded: ", error);
      });
  }
  window.app = window.app || {};
  window.app.Loader = Loader;
})();
