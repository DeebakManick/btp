/*global QUnit*/

sap.ui.define([
	"projectproduct/project1/controller/productlist.controller"
], function (Controller) {
	"use strict";

	QUnit.module("productlist Controller");

	QUnit.test("I should test the productlist controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
