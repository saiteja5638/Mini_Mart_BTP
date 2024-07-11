sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
function (Controller,Filter,FilterOperator) {
    "use strict";
    var that;
    return Controller.extend("salespredictions.controller.View1", {
        onInit: function () {
            that = this;
        },
        onFilterChange:function()
        {
            var oView = this.getView();
            var aFilters = [];
            
            // Get the selected values from the combo boxes
            var sValue1 = oView.byId("_IDGenComboBox1").getSelectedKey();
            var sValue2 = oView.byId("_IDGenComboBox2").getSelectedKey();
            var sValue3 = oView.byId("_IDGenComboBox3").getSelectedKey();

            // Create filters if values are selected
            if (sValue1) {
                aFilters.push(new Filter("PLANT_NAME", FilterOperator.EQ, sValue1));
            }
            if (sValue2) {
                aFilters.push(new Filter("LEVEL", FilterOperator.EQ, sValue2));
            }
            if (sValue3) {
                aFilters.push(new Filter("DURATION", FilterOperator.EQ, sValue3));
            }

            // Apply the filters with "OR" condition
            var oTable = oView.byId("_IDGenTable1");
            var oBinding = oTable.getBinding("items");
            oBinding.filter(aFilters.length > 0 ? new Filter(aFilters, true) : []);
        }
    });
});
