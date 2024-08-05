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
            if (!that.create) {

                that.create = sap.ui.xmlfragment("productmaster.view.create_product", that);
            }
           
        },
        handle_press:function()
        {
            var oView = this.oView.getParent().getParent();

          

             let get_item = that.byId("gridList").getSelectedItem().getBindingContext().getObject() 

             that.getOwnerComponent().getModel("oGmodel").setProperty("/items",get_item)

             var oSecondController = sap.ui.controller("productmaster.controller.View2"); 
             oSecondController.Bind_Object();
             oView.setLayout(fioriLibary.LayoutType.TwoColumnsMidExpanded);
        },
        create_:function()
        {
            sap.ui.getCore().byId("pname").setValue("")
            sap.ui.getCore().byId("pdescr").setValue("")
            sap.ui.getCore().byId("quantity").setValue("")
            sap.ui.getCore().byId("avatar").getValue("")
            that.create.open()
        },
        close_:function()
        {
            that.create.close()
        },
        submit_create:function()
        {
            let obj = {
                PRODUCT_NAME:sap.ui.getCore().byId("pname").getValue(),
                PRODUCT_DESC:sap.ui.getCore().byId("pdescr").getValue(),
                QUAN_AVAIL:sap.ui.getCore().byId("quantity").getValue(),
                AVATAR:sap.ui.getCore().byId("avatar").getValue()
            }

            that.getOwnerComponent().getModel().create('/MaterialManagement',obj,{
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
