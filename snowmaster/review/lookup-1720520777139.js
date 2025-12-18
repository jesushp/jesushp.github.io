(function(window, undefined) {
  var dictionary = {
    "bdc512a2-432c-4483-a34d-1a19a241a658": "Analysis",
    "7fc7ef10-8bc8-4427-a198-4c1adbddc794": "Radar",
    "f14b54a2-cf67-48f0-821a-da7ba7f5b488": "Foto",
    "8aaf5665-adfd-41cb-9768-882528370dd3": "Ficha",
    "3fbe2231-d974-4e55-9f4b-1010745ea583": "Propuesta",
    "a73e3fd4-1e7b-4c24-9e41-399a02857927": "Sign up",
    "b16eea7b-9a16-463b-97d7-f04f16e745c4": "Cam",
    "5d72d4f7-2f85-4173-8cce-db2b0a927c4a": "Editor",
    "50d6916c-d535-460a-8165-592ee53cc323": "Ajustes",
    "9b8bdce7-572c-4d34-8f4d-09c022cea64f": "Viajes",
    "d50336c2-9efb-4028-b888-71de97baf477": "Estaciones",
    "6b4c99c6-eddc-44cc-b5e3-c85301338d41": "Album",
    "5211778d-e24a-47e0-9623-3d537497b211": "Ranking",
    "9e30b05a-0134-42f2-9895-1690f4affe4f": "Tracker",
    "11e77313-3d03-4388-b652-0d241ee8edb5": "Estaciones 2",
    "c8523386-3d1f-4f38-90f0-52d1cd4fd5bf": "Actividad",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Welcome",
    "9cb4220e-979b-4a38-9417-9c0d6e130d9d": "Profile 2",
    "aecf93d6-80e1-49a0-8f21-3a08c4008f63": "Profile 3",
    "c4d38f79-5237-44b6-a41d-20e5b1d180c4": "permisos-camara",
    "bc83a819-05e8-4612-8cc0-80bf1e9209a2": "Template sM",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "62881520-8bbb-4284-96e6-711f50b04118": "Radar 24dp",
    "6da250a2-1fb4-41e5-a32b-5d00b229fc16": "Radar paths",
    "1e59c586-2db3-4b0e-bdaa-13ac8e865f55": "Menu",
    "8609d76a-153c-4949-88d6-b6e76befd5fe": "Search bar",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);