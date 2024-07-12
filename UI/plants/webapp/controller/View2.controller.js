sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";
    var that;

    // 
    return Controller.extend("plants.controller.View2", {
        onInit: function () {
            that=this;
            that.oGModel = that.getOwnerComponent().getModel("oGModel")
            that.oDataModel = that.getOwnerComponent().getModel();
         
        },
        itemDetails:function(){
            
            var itemDet = that.oGModel.getProperty("/selItem")
            that.selBranch = that.oGModel.getProperty("/selItemBranch")
            that.byId("idHeading").setText(itemDet.PLANT_NAME)
            that.byId("idSnapHead").setText(itemDet.PLANT_NAME)
            that.byId("idImg").setSrc(itemDet.PLANT_AVATAR)
            
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({
                items:itemDet
            })
            that.getView().byId("idFlex").setModel(oModel);
            that.empDet();
            // that.custDet();
            console.log(itemDet);
            that.empDet(itemDet.PLANT_NAME)
        },
        empDet:function(id){
            var aEmp = [];
            var aCust = [];

            that.getOwnerComponent().getModel().read("/Employees",{
                success:function(response)
                {
                    let res = response.results.filter(i=>i.Branch == id)
                    var oModel = new sap.ui.model.json.JSONModel({
                        items:res
                    });

                    that.byId("List_employee").setModel(oModel)

                },
                error:function(er)
                {
                    console.log(er)
                }
            })
            that.getOwnerComponent().getModel().read("/Customers",{
                success:function(response)
                {
                    let res = response.results.filter(i=>i.Branch == id)
                    var oModel = new sap.ui.model.json.JSONModel({
                        items:res
                    });

                    that.byId("List").setModel(oModel)

                },
                error:function(er)
                {
                    console.log(er)
                }
            })
            // that.oDataModel.read("/Employees",{
            //     success:function(oData){
            //         for(var i=0;i<oData.results.length;i++){
            //             if(that.selBranch == oData.results[i].Branch){
            //                 aEmp.push(oData.results[i])
            //             }
            //         }
            //         var oModel = new sap.ui.model.json.JSONModel();
            //         oModel.setData({
            //             items:aEmp
            //         })
            //         that.getView().byId("idEmpList").setModel(oModel);
            //     },
            //     error:function(){}
            // })

            
            // that.oDataModel.read("/Customers",{
            //     success:function(oData){
            //         for(var i=0;i<oData.results.length;i++){
            //             if(that.selBranch == oData.results[i].Branch){
            //                 aCust.push(oData.results[i])
            //             }
            //         }
            //         var oModel = new sap.ui.model.json.JSONModel();
            //         oModel.setData({
            //             items:aCust
            //         })
            //         that.getView().byId("idCustList").setModel(oModel);
            //     },
            //     error:function(){}
            // })
        }
    });
});
