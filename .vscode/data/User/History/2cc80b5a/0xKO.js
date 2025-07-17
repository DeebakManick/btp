sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("taskbtp.taskbtp.controller.TaskBtp", {
        onInit() {
            var oModel = new sap.ui.model.json.JSONModel("model/products.json");
            this.getView().setModel(oModel);
        },
        onListItemPress: function (oEvent) {
			MessageToast.show("Pressed : " + oEvent.getSource().getTitle());
		},

        
        onSearch: function (sevent) {
            var searchString = sevent.getParameter("value"); 
            var oFilter = new sap.ui.model.Filter({ 
                filters: [ 
                    new sap.ui.model.Filter("title", "Contains", searchString), 
                   new sap.ui.model.Filter("statusText", "Contains", searchString),
                   new sap.ui.model.Filter("number", "Contains", searchString),
                   new sap.ui.model.Filter("weight", "Contains", searchString),
                 ] }); 
                this.getView().byId("RoyalEnfield").getBinding("items").filter(oFilter);
            },

        onAscending:function(){
            this._sortDescending = false; 
    var oSorter = new sap.ui.model.Sorter("title", this._sortDescending);
    this.getView().byId("RoyalEnfield").getBinding("items").sort(oSorter)
        },
        onDescending:function(){
            this._sortDescending = true; 
            var oSorter = new sap.ui.model.Sorter("title", this._sortDescending);
            this.getView().byId("RoyalEnfield").getBinding("items").sort(oSorter)
        }

    });
});