sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
 
    return BaseController.extend("assessment1.controller.productDetailPage", {
        onInit() {
          sap.ui.core.UIComponent.getRouterFor(this).getRoute("productDetailPage").
          attachPatternMatched(this._objPatternMatched,this);
         
        },
        onNavigationBack:function(){
          window.history.back();
          },
          _objPatternMatched(evt){
            var index = evt.getParameter('arguments').productIndex;
             var materialsdata = this.getView().getModel("mat").oData;
              var getvendors = [];
             for(var a=0;a<materialsdata.length;a++){
                 if(materialsdata[a].materialId == index){
                 getvendors = materialsdata[a].vendors
                 }

             }

            // var mat = this.getView().getModel('mat').oData[index].vendors;
             var matdisp = new sap.ui.model.json.JSONModel(getvendors);
           this.getView().byId('idVendorsList').setModel(matdisp,'matdisp');
          },
          onSearch:function(evt){
            var search = evt.getParameter("value")
            var filter = new sap.ui.model.Filter("vendorName","Contains",search);
            this.getView().byId("idVendorsList").getBinding("items").filter(filter)
        },
          onVendorDetailpage :function (evt){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                            oRouter.navTo("vendorDetailPage",{
                                "vendorIndex" : evt.getSource().getBindingContext("mat").getPath().split("/")[1]
                            });
        }
        
    });
  });