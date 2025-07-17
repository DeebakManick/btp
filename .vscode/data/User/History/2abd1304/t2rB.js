sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
 
    return BaseController.extend("productlist.productlist.controller.productDetailPage", {
        onInit() {
          var productsModel = new sap.ui.model.json.JSONModel("model/products.json");
          this.getView().setModel(productsModel);
          sap.ui.core.UIComponent.getRouterFor(this).getRoute("productDetailPage").
          attachPatternMatched(this._objPatternMatched,this);
         
        },
        onNavigationBack:function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteProducts");
          },
          
    });
  });