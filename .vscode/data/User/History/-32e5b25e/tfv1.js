sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("projectproduct.project1.controller.productlist", {
        onInit() {
            var productsModel = new sap.ui.model.json.JSONModel("model/products.json");
           this.getView().setModel(productsModel);
        }
    });
});