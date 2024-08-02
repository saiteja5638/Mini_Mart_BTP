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

            if (!that.create) {

                that.create = sap.ui.xmlfragment("plants.view.create", that);
            }
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
           
          
        },
        create_:function()
        {
            sap.ui.getCore().byId("pname").setValue("")
            sap.ui.getCore().byId("lname").setValue("")
            sap.ui.getCore().byId("pcontact").setValue("")
            sap.ui.getCore().byId("pemail").setValue("")
            sap.ui.getCore().byId("phead").setValue("")
            that.create.open()
        },
        close_:function()
        {
            that.create.close()
        },
        submit_create:function()
        {
            let obj = {
                PLANT_ID: "PL"+ Math.floor(Math.random()*85222),
                PLANT_NAME:sap.ui.getCore().byId("pname").getValue(),
                PLANT_LOC:sap.ui.getCore().byId("lname").getValue(),
                PLANT_CONT:sap.ui.getCore().byId("pcontact").getValue(),
                PLANT_EMAIL:sap.ui.getCore().byId("pemail").getValue(),
                PLANT_HEAD:sap.ui.getCore().byId("phead").getValue(),
                PLANT_AVATAR:sap.ui.getCore().byId("avatar").getValue()
            }

            that.getOwnerComponent().getModel().create('/PLANTS',obj,{
                success:function(response)
                {
                    console.log(response)
                    that.create.close()
                },
                error:function(error)
                {
                    console.log(error)
                }
            })
        }
    });
});
