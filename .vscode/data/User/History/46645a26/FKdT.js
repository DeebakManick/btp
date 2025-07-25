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
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteAssessment1");
          },
          _objPatternMatched(evt){
            var index = evt.getParameter('arguments').productIndex;
             var getvendors = this.getview().getModel("mat").oData;
            // var mat = this.getView().getModel('mat').oData[index].vendors;
            // var matdisp = new sap.ui.model.json.JSONModel(mat);
            // this.getView().byId('idVendorsList').setModel(matdisp,'matdisp');
          },
          onVendorDetailpage :function (evt){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                            oRouter.navTo("vendorDetailPage",{
                                "vendorIndex" : evt.getSource().getBindingContext("mat").getPath().split("/")[1]
                            });
        }
        
    });
  });