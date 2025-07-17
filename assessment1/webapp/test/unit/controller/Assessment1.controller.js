/*global QUnit*/

sap.ui.define([
	"assessment1/controller/Assessment1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Assessment1 Controller");

	QUnit.test("I should test the Assessment1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
