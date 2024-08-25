sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/f/library"
],
function (Controller,fioriLibary) {
    "use strict";
   var that;
    return Controller.extend("trainingcapm3.controller.View1", {
        onInit: function () {
          that = this;
        },
        onSubmit:function()
        {
            let get_Selected = that.byId("Question_List")
            
        },
        View2:function()
        {
            var oView = this.oView.getParent().getParent();

            oView.setLayout(fioriLibary.LayoutType.TwoColumnsMidExpanded);
        }
    });
});
