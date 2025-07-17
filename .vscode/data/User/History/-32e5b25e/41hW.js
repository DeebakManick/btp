sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("projectproduct.project1.controller.productlist", {
        onInit() {
            var productsModel = new sap.ui.model.json.JSONModel("model/products.json");
           this.getView().setModel(productsModel);
        },
        onSearchProducts: function(evt){
            var Prdid = evt.getParameter("newValue");
            var filters = new sap.ui.model.filtersilter("products>ProductName","Contains",Prdid);
            this.getView().byId("Prdid").getBinding("items").Filter(filters);
        }
    });
});