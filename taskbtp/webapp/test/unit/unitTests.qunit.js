/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"taskbtp/taskbtp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
