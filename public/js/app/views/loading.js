define(["marionette", "tpl!app/templates/loading.html"], function(Marionette, Template) {
  "use strict";
  return Backbone.Marionette.ItemView.extend({
    template: Template
  });
})