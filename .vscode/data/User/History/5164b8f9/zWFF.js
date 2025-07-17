sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("reprj.controller.RoyalEnfield", {
        onInit() {
            var oModel = new sap.ui.model.json.JSONModel("model/products.json");
         this.getView().setModel(oModel);
        }
    });
});