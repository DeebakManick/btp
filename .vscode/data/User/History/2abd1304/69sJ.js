sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
 
    return BaseController.extend("productlist.productlist.controller.App", {
        onInit() {
            
        },
        onProductRowPress:function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("productDetailPage")
        }
    });
  });