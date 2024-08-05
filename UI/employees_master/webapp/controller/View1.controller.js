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
                Name:sap.ui.getCore().byId("pname").getValue(),
                Email:sap.ui.getCore().byId("_IDGenInput1").getValue(),
                PhoneNumber:sap.ui.getCore().byId("_IDGenInput2").getValue(),
                Address:sap.ui.getCore().byId("_IDGenInput3").getValue(),
                Role:sap.ui.getCore().byId("_IDGenInput4").getValue(),
                Salary:parseInt(sap.ui.getCore().byId("_IDGenInput5").getValue()),
                HireDate:sap.ui.getCore().byId("_IDGenDatePicker1").mProperties.dateValue,
                Branch:sap.ui.getCore().byId("_IDGenComboBox1").getSelectedItem().getText()
            }

            that.getOwnerComponent().getModel().create('/Employees',obj,{
                success:function(response)
                {
                    console.log(response)
                    debugger
                    let exp ={
                        EmployeeID_ID:response.ID
                    }
                    that.getOwnerComponent().getModel().create('/EmployeeExperience',exp,{
                        success:function(res)
                        {
                            console.log(res)
                            that.create.close()
                        },
                        error:function(err)
                        {
                            console.log(err)
                        }
                    })
                   
                },
                error:function(error)
                {
                    console.log(error)
                }
            })
        }
    });
});
