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

            if (!that.create) {

                that.create = sap.ui.xmlfragment("employeesmaster.view.create_emp", that);
            }
          
        },
        on_trigger:function()
        {
            var oView = this.oView.getParent().getParent();

            that.getOwnerComponent().getModel("oGmodel").setProperty("/items",that.byId("_IDGenList1").getSelectedItem().getBindingContext().getObject())
            
            var oSecondController = sap.ui.controller("employeesmaster.controller.View2"); // Replace with the actual ID of the second controller
            oSecondController.Bind_Object();
            oView.setLayout(fioriLibary.LayoutType.TwoColumnsMidExpanded);
        },
        create_:function()
        {
            sap.ui.getCore().byId("pname").setValue("")
            sap.ui.getCore().byId("_IDGenInput1").setValue("")
            sap.ui.getCore().byId("_IDGenInput2").setValue("")
            sap.ui.getCore().byId("_IDGenInput3").setValue("")
            sap.ui.getCore().byId("_IDGenInput4").setValue("")
            sap.ui.getCore().byId("_IDGenInput5").setValue("")
            that.create.open()
        },
        close_:function()
        {
            that.create.close()
        },
        submit_create:function()
        {
            let obj = {
                PLANT_ID: "EMP"+ Math.floor(Math.random()*85222),
                PLANT_NAME:sap.ui.getCore().byId("pname").getValue(),
                PLANT_LOC:sap.ui.getCore().byId("lname").getValue(),
                PLANT_CONT:sap.ui.getCore().byId("pcontact").getValue(),
                PLANT_EMAIL:sap.ui.getCore().byId("pemail").getValue(),
                PLANT_HEAD:sap.ui.getCore().byId("phead").getValue(),
                PLANT_AVATAR:sap.ui.getCore().byId("avatar").getValue()
            }

            that.getOwnerComponent().getModel().create('/Employees',obj,{
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
