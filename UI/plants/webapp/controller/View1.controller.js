sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library'
],
function (Controller) {
    "use strict";
    var that;

    return Controller.extend("plants.controller.View1", {
        onInit: function () {
            that=this;
            that.oGModel = this.getOwnerComponent().getModel("oGModel")
            that.layoutModel = that.getOwnerComponent().getModel("layoutModel");
                  
            that.getOwnerComponent().getRouter().navTo("View2");
            that.oSecondController = sap.ui.controller("plants.controller.View2"); 
        },
        onItem:function(oEvent){
            var oSelected = that.byId("idList").getSelectedItem().getBindingContext().getObject();
            that.oGModel.setProperty("/selItem",oSelected);
            that.oGModel.setProperty("/selItemBranch",oSelected.PLANT_NAME);
            that.oSecondController.itemDetails();
            that.layoutModel.setProperty("/layout","TwoColumnsMidExpanded");
           
          
        }
    });
});
