(function (DreditorUI) {

  /**
   * @type {DreditorUI}
   */
  var dreditor = new DreditorUI({
    comments: true,

    // Map Drupal extensions to their appropriate Prism language.
    prismExtensionLanguageMap: {
      coffee: ['coffeescript', 'javascript'],
      engine: 'php',
      htaccess: 'apacheconf',
      inc: 'php',
      info: 'ini',
      install: 'php',
      make: 'ini',
      md: 'markdown',
      module: 'php',
      profile: 'php',
      test: 'php',
      theme: 'php',
      yml: 'yaml'
    },

    // Router options.
    router: {
      // Change the route prefix from "/dreditor" to "/review".
      prefix: 'review'
    }
  });

  function getAbsoluteUrl(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.href;
  }

  var patches = document.getElementById('patches');
  document.getElementById('load').addEventListener('click', function () {
    var url = patches.value || patches.options[patches.selectedIndex].value;
    if (!url) window.alert('You must select a patch to load.');
    dreditor.navigate(getAbsoluteUrl(url));
  }, false);

})(DreditorUI);
