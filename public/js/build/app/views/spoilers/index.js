define(["text!app/templates/spoilers/index.html","app/views/spoilers/collection"],function(e,t){"use strict";return Backbone.Marionette.LayoutView.extend({template:e,regions:{collectionLatch:"#collectionLatch"},renderCollection:function(e){this.collectionLatch.show(new t(e))},onRender:function(){this.filter={},this.renderCollection(this.filter)}})});