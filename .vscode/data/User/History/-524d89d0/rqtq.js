sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
 
    return BaseController.extend("taskbtp.taskbtp.controller.productDetailPage", {
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
          _objPatternMatched:function(oEvent){
            var that = this;
            var passedProductIndex = oEvent.getParameter("arguments").productIndex;
            if(!this.initialLoad) {
              this.initialLoad =true;
              window.setTimeout(function(){
                var productDetailModel = new sap.ui.model.json.JSONModel(that.getView().getModel().
                oData.Prouducts[passedProductIndex]);
                that.getView().setModel(productDetailModel,"productDetailModel");
              },1500);
            }else{
              var productDetailModel = new sap.ui.model.json.JSONModel(that.getView().getModel().
              oData.Prouducts[passedProductIndex]);
                that.getView().setModel(productDetailModel,"productDetailModel");
            }       
          }
    });
  });