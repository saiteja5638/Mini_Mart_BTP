sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library'
],
function (Controller,fioriLibary) {
    "use strict";
    var that;

    // 
    return Controller.extend("plants.controller.View2", {
        onInit: function () {
            that=this;
            that.oGModel = that.getOwnerComponent().getModel("oGModel")
            that.oDataModel = that.getOwnerComponent().getModel();

            if (!that.employee) {

                that.employee = sap.ui.xmlfragment("plants.view.employees", that);
            }
         
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

        },
        Close_tab: function () {
            var oView = this.oView.getParent().getParent();

            oView.setLayout(fioriLibary.LayoutType.OneColumn);
        },
        onDelete:function()
        {
            var itemDet = that.oGModel.getProperty("/selItem")

            that.getOwnerComponent().getModel().remove("/PLANTS/"+itemDet.PLANT_ID,{
                success:function(response)
                {
                    sap.m.MessageToast.show("Branch Deleted")
                    that.Close_tab()
                },
                error:function(error)
                {
                    console.log(error)
                }
            })
        },
        open_employee_box:function()
        {
            that.getOwnerComponent().getModel().read("/Employees",{
                success:function(response)
                {
                    let data  = response.results;

                    let oModel = new sap.ui.model.json.JSONModel({
                        items:data
                    })

                    sap.ui.getCore().byId("list_employee").setModel(oModel)
                    that.employee.open()
                }
            })
         
        },
        onClose_emp:function()
        {
            that.employee.close()
        },
        onUpdate_empBran:function()
        {
            let getSelected = sap.ui.getCore().byId("list_employee").getSelectedItems()[0].getBindingContext().getObject()
            var itemDet = that.oGModel.getProperty("/selItem")
            getSelected.forEach(element => {
                element['Branch'] = itemDet.PLANT_NAME;
                that.getOwnerComponent().getModel().update("/Employees/"+element.ID,element,{
                    success:function(response)
                    {
                        console.log(response)
                    },
                    error:function(error)
                    {
                        console.log(error)
                    }
                })
            });
        }
    });
});
