sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("assessment1.controller.Assessment1", {
        onInit() {

            // var productsModel = new sap.ui.model.json.JSONModel("model/products.json");
            // this.getView().setModel(productsModel);
        },
        onProductRowPress :function (evt){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                            oRouter.navTo("productDetailPage",{
                             "productIndex" : evt.getSource().getBindingContext("mat").getProperty().materialId
                            });
        },
        onSortPress:function(){
            this._sortDescending = !this._sortDescending;
            var oSorter = new sap.ui.model.Sorter("materialId", this._sortDescending);
            this.getView().byId("ProductId").getBinding("items").sort(oSorter);
        },
        onAddProductPress:function(){
            this.addMaterial.open();
            this.mode="ADD";
            
         var newProductsobj = {
         "materialId": this.getView().getModel().oData.Prouducts.length+1,
         "materialName": "",
        "description": "",
        "unitOfMeasure": "",
        "currentStock" : ""
         };
         var Materialsob = new sap.ui.model.json.JSONModel(newProductsobj);
         this.getView().setModel(Materialsob,"Materialsob");
         
        }


    });
});