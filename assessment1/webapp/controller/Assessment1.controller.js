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
         
            var newId ; 
            if (aProducts && aProducts.length > 0) {
                var lastMaterialId = aProducts[aProducts.length - 1].materialId; 
                var numberPart = parseInt(lastMaterialId.replace("MAT", ""), 10);
                var nextNumber = numberPart + 1;
                newId = "MAT" + nextNumber.toString().padStart(3, "0");
            }

            this.addMaterial.open();
            this.mode="ADD";           
         var newProductsobj = {
         "materialId": newId ,
        //  this.getView().getModel().oData.Prouducts.length+1,
         "materialName": "",
        "description": "",
        "unitOfMeasure": "",
        "currentStock" : ""
         };
         var Materialsob = new sap.ui.model.json.JSONModel(newProductsobj);
         this.getView().setModel(Materialsob,"Materialsob");
         
        },
        onSaveProduct:function(){

            if(this.mode == "ADD"){
   this.getView().getModel().oData.Prouducts.push(this.getView().getModel("Productsob").oData);
            }else{
                sap.m.MessageToast.show("Product is Updated");
            }
          
            this.getView().getModel().updateBindings(true);
            this.addProduct.close();
        },
        onEditProductPress:function(){
            this.mode="EDIT";
            if(!this.getView().byId("ProductId").getSelectedItem()){
                sap.m.MessageToast.show("Please select an item to edit!");
                return;
            }
            var editProductObj = this.getView().byId("ProductId").getSelectedItem().getBindingContext().getObject();
            var proObj = new sap.ui.model.json.JSONModel(editProductObj);
            this.getView().setModel(proObj,"Materialsob");
            this.addMaterial.open();

        },
        onCancelProduct:function(){
            this.addProduct.close();
        },
        onDeleteProductPress:function(evt){
            var sPath = evt.getSource().getBindingContext().getPath();
            var iIndex = parseInt(sPath.split("/")[1]); 
        
            var oModel = this.getView().getModel("mat"); 
            var aProducts = oModel.getProperty("/") || [];
        
            // Remove the product at index
            aProducts.splice(iIndex, 1);
        
            
            oModel.setProperty("/", aProducts);
            }
    });
});