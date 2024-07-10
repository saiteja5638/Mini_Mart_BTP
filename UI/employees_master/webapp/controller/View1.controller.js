sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/f/library"
],
function (Controller,fioriLibary) {
    "use strict";
    var that;
    return Controller.extend("employeesmaster.controller.View1", {
        onInit: function () {
            that = this;
        },
        on_trigger:function()
        {
            var oView = this.oView.getParent().getParent();

            that.getOwnerComponent().getModel("oGmodel").setProperty("/items",that.byId("_IDGenList1").getSelectedItem().getBindingContext().getObject())
            
            var oSecondController = sap.ui.controller("employeesmaster.controller.View2"); // Replace with the actual ID of the second controller
            oSecondController.Bind_Object();
            oView.setLayout(fioriLibary.LayoutType.TwoColumnsMidExpanded);
        }
    });
});
