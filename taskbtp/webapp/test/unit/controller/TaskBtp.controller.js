/*global QUnit*/

sap.ui.define([
	"taskbtp/taskbtp/controller/TaskBtp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TaskBtp Controller");

	QUnit.test("I should test the TaskBtp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
