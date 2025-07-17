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
        }
    });
});