sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
 
    return BaseController.extend("assessment1.controller.vendorDetailPage", {
        onInit() {
          sap.ui.core.UIComponent.getRouterFor(this).getRoute("vendorDetailPage").
          attachPatternMatched(this._objPatternMatched,this);    
        },
        onNavigationBack:function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("productDetailPage");
          },
          _objPatternMatched(evt){
            var index = evt.getParameter('arguments').vendorIndex;
            var mat = this.getView().getModel('mat').oData[index].vendors;
            var matdisp = new sap.ui.model.json.JSONModel(mat);
            this.getView().byId('idVendorsList').setModel(matdisp,'matdisp');
          },
          onVendorDetailpage :function (evt){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                            oRouter.navTo("vendorDetailPage",{
                                "vendorIndex" : evt.getSource().getBindingContext("mat").getPath().split("/")[1]
                            });
        }
        
    });
  });