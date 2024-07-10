sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/f/library",
],
function (Controller,fioriLibary) {
    "use strict";
    var that;
    return Controller.extend("productmaster.controller.View1", {
        onInit: function () {
            that = this;
        },
        handle_press:function()
        {
            var oView = this.oView.getParent().getParent();

          

             let get_item = that.byId("gridList").getSelectedItem().getBindingContext().getObject() 

             that.getOwnerComponent().getModel("oGmodel").setProperty("/items",get_item)

             var oSecondController = sap.ui.controller("productmaster.controller.View2"); 
             oSecondController.Bind_Object();
             oView.setLayout(fioriLibary.LayoutType.TwoColumnsMidExpanded);
        }
    });
});
