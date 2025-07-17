sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
 
    return BaseController.extend("assessment1.controller.productDetailPage", {
        onInit() {
          var productsModel = new sap.ui.model.json.JSONModel("model/products.json");
          this.getView().setModel(productsModel);

          sap.ui.core.UIComponent.getRouterFor(this).getRoute("productDetailPage").
          attachPatternMatched(this._objPatternMatched,this);
         
        },
        onNavigationBack:function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteAssessment1");
          },
          _objPatternMatched(evt){
            var index = evt.getParameter('arguments').productIndex;
            var mat = this.getView().getModel('mat').oData[index]
          }
        
    });
  });