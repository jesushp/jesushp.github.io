jQuery("#simulation")
  .on("click", ".m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 .click,.m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55.click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#Path_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Text_2" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Text_2" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Path_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Path_6" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Path_6" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Text_5" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  },{
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Path_19" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Text_5" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Path_19" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d50336c2-9efb-4028-b888-71de97baf477"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Text_4" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  },{
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Path_15" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Text_4" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Path_15" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9b8bdce7-572c-4d34-8f4d-09c022cea64f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Text_3" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  },{
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Path_14" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Text_3" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Path_14" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c8523386-3d1f-4f38-90f0-52d1cd4fd5bf"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Text_2" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  },{
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Path_20" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Text_2" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5211778d-e24a-47e0-9623-3d537497b211"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Text_1" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  },{
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Path_12" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Text_1" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "target": [ "#m-1e59c586-2db3-4b0e-bdaa-13ac8e865f55 #Path_12" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9cb4220e-979b-4a38-9417-9c0d6e130d9d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });