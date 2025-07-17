sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("taskbtp.taskbtp.controller.TaskBtp", {
        onInit() {
            var oModel = new sap.ui.model.json.JSONModel("model/products.json");
            this.getView().setModel(oModel);

            if(!this.addProduct){
                this.addProduct = new sap.ui.xmlfragment("taskbtp.taskbtp.view.addProduct",this);
                this.getView().addDependent(this.addProduct); 
            }
        },
        onListItemPress: function (oEvent) {
			MessageToast.show("Pressed : " + oEvent.getSource().getTitle());
		},
        onSearch: function (evt) {
            var searchString = evt.getParameter("value"); 
            var oFilter = new sap.ui.model.Filter({ filters: 
                [ new sap.ui.model.Filter("title", "Contains", searchString), 
                new sap.ui.model.Filter("statusText", "Contains", searchString) ] }); 
                this.getView().byId("RoyalEnfield").getBinding("items").filter(oFilter);
            }
            ,
        onAscending:function(){
            this._sortDescending = false; 
    var oSorter = new sap.ui.model.Sorter("title", this._sortDescending);
    this.getView().byId("RoyalEnfield").getBinding("items").sort(oSorter)
        },
        onDescending:function(){
            this._sortDescending = true; 
            var oSorter = new sap.ui.model.Sorter("title", this._sortDescending);
            this.getView().byId("RoyalEnfield").getBinding("items").sort(oSorter)
        },
        onAddProductPress:function(){         
            this.mode="ADD";
         var newProductsobj = {
        "title": "",
        "number": "",
        "statusText": "",
         };
         var Productsob = new sap.ui.model.json.JSONModel(newProductsobj);
         this.getView().setModel(Productsob,"Productsob");
         this.addProduct.open();
        },
        onSaveProduct:function(){
            if(this.mode == "ADD"){
   this.getView().getModel().oData.Products.push(this.getView().getModel("Productsob").oData);
            }else{
                sap.m.MessageToast.show("Product is Updated");
            }
            this.getView().getModel().updateBindings(true);
            this.addProduct.close();
        },
        onCancelProduct:function(){
            this.addProduct.close();
        },
        onEditProductPress:function(){
            this.mode="EDIT";
            if(!this.getView().byId("RoyalEnfield").getSelectedItem()){
                sap.m.MessageToast.show("Please select an item to edit!");
                return;
            }
            var editProductObj = this.getView().byId("RoyalEnfield").getSelectedItem().getBindingContext().getObject();
            var proObj = new sap.ui.model.json.JSONModel(editProductObj);
            this.getView().setModel(proObj,"Productsob");
            this.addProduct.open();
 
        },
        onDeleteProductPress:function(evt){
            var selectedTableRow = evt.getSource().getBindingContext().getPath().split("/")[2];
            this.getView().getModel().oData..splice(selectedTableRow,1);
            this.getView().getModel().updateBindings(true);
            }


    });
});