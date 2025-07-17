sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("assessment1.controller.Assessment1", {
        onInit() {

            // var productsModel = new sap.ui.model.json.JSONModel("model/products.json");
            // this.getView().setModel(productsModel);
            // home/user/assessment1/webapp/view/addMaterial.fragment.xml    

           if(!this.addMaterial){
            this.addMaterial = new sap.ui.xmlfragment("assessment1.view.addMaterial",this);
            this.getView().addDependent(this.addMaterial); }
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

            var that = this;
       
            var oProductsModel = this.getView().getModel("mat"); 
            var aProducts = oProductsModel.getProperty("/"); 
         
            var newId = ""; 
            if (aProducts && aProducts.length > 0) {
                var lastMaterialId = aProducts[aProducts.length - 1].materialId; // e.g. "MAT005"
                var numberPart = parseInt(lastMaterialId.replace("MAT", ""), 10);
                var nextNumber = numberPart + 1;
                newId = "MAT" + nextNumber.toString().padStart(3, "0"); // e.g., "MAT006"
            }

            this.addMaterial.open();
            this.mode="ADD";           
         var newProductsobj = {
         "materialId": "",
        //  this.getView().getModel().oData.Prouducts.length+1,
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