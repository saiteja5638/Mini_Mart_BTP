sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/f/library"
],
function (Controller,fioriLibary) {
    "use strict";
    var that ; 
    return Controller.extend("customerlog.controller.View2", {
        onInit: function () {
            that = this;
        },
        Close_tab: function () {
            var oView = this.oView.getParent().getParent();

            oView.setLayout(fioriLibary.LayoutType.OneColumn);
        },
        Bind_Object: function () {
            let get_object = that.getOwnerComponent().getModel("oGmodel").getProperty("/items")
            that.byId("_IDGenTitle1").setText(get_object.Name)
            that.byId("_IDGenText4").setText(get_object.Email)
            that.byId("_IDGenText8").setText(get_object.PurchasedTillNow)
            that.byId("_IDGenText1").setText(get_object.Branch)
            that.byId("_IDGenText6").setText(get_object.CONTACT)
            that.updateBinding(get_object.ID)
        },
        updateBinding:function(id)
        {
            that.getOwnerComponent().getModel().read("/CustomerPurchases",{
                success:function(response)
                {
                    let res  = response.results.filter(i=> i.CustomerID_ID  == id)

                    let oModel = new sap.ui.model.json.JSONModel({
                        items:res
                    })

                    that.byId("_IDGenTable1").setModel(oModel)
                },
                error:function(error)
                {
                    console.log(error)
                }
            })
        }
    });
});
