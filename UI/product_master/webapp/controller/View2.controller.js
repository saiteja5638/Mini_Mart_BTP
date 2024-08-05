sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/f/library",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
function (Controller,fioriLibary,Filter,FilterOperator) {
    "use strict";
    var that;
    return Controller.extend("productmaster.controller.View2", {
        onInit: function () {
            that = this;
        },
        Edit_Quan:function()
        {
            let table = this.byId("_IDGenTable1")
            
            table.getItems().forEach(element => {
                element.getCells().forEach(element=>{
                    if (element.mBindingInfos.text==undefined) {
                        element.setEditable(true)
                    }
                })
            });
        },
        Close_tab:function()
        {
            var oView = this.oView.getParent().getParent();

            oView.setLayout(fioriLibary.LayoutType.OneColumn); 
        },
        Bind_Object:function()
        {
            let get_object = that.getOwnerComponent().getModel("oGmodel").getProperty("/items")
            that.byId("_IDGenTitle1").setText(get_object.PRODUCT_NAME)
            that.byId("_IDGenAvatar1").setSrc(get_object.AVATAR)
            that.byId("_IDGenText3").setText(get_object.CUR_DEALER)
            that.byId("_IDGenText1").setText(get_object.PRODUCT_DESC)
            that.byId("_IDGenText856").setText(get_object.QUAN_AVAIL) 
            that.update_tables(get_object.ID)
        },
        update_tables:function(id)
        {
            that.getOwnerComponent().getModel().read("/QUAN_INFO",{
                success:function(response)
                {
                    let res = response.results.filter(i=> i.MAT_QUAN_ID == id )
                    
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
   
            that.getOwnerComponent().getModel().read("/DEALERS",{
                success:function(response)
                {
                    let res = response.results.filter(i=> i.DEAL_MAT_ID == id )
               
                    let oModel = new sap.ui.model.json.JSONModel({
                        items:res
                    })
                    that.byId("_IDGenTable2").setModel(oModel)
                },
                error:function(error)
                {
                    console.log(error)
                }
            })
        }
    });
});
