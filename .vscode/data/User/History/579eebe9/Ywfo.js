sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    
], (Controller) => {
    "use strict";

    return Controller.extend("productlist.productlist.controller.Products", {
        onInit() {
            var productsModel = new sap.ui.model.json.JSONModel("model/products.json");
           this.getView().setModel(productsModel);

           if(!this.addProduct){
            this.addProduct = new sap.ui.xmlfragment("productlist.productlist.view.addProduct",this);
            this.getView().addDependent(this.addProduct); 
        }
        },
       
                    onSearch:function(evt){
                        var search = evt.getParameter("value")
                        var filter = new sap.ui.model.Filter("ProductName","Contains",search);
                        this.getView().byId("ProductId").getBinding("items").filter(filter)
                    },
                    onSortPress:function(){
                        this._sortDescending = !this._sortDescending;
                        var oSorter = new sap.ui.model.Sorter("ProductId", this._sortDescending);
                        this.getView().byId("ProductId").getBinding("items").sort(oSorter);
                    },
                    onAddProductPress:function(){
                        this.mode="ADD";
                        
                     var newProductsobj = {
                     "ProductId": this.getView().getModel().oData.Prouducts.length+1,
                   "ProductName": "",
                   "ProductDescription": "",
                    "Location": "",
                  "CostCenter": "",
                   "Status" : "Inactive"
                     };
                     var Productsob = new sap.ui.model.json.JSONModel(newProductsobj);
                     this.getView().setModel(Productsob,"proObj");
                     this.addProduct.open();
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
                        this.getView().setModel(proObj,"proObj");
                        this.addProduct.open();
             
                    },

                    onCancelProduct:function(){
                        this.addProduct.close();
                    },
                    onDeleteProductPress:function(evt){
                        var selectedTableRow = evt.getSource().getBindingContext().getPath().split("/")[2];
                        this.getView().getModel().oData.Prouducts.splice(selectedTableRow,1);
                        this.getView().getModel().updateBindings(true);
                        }

    });
});