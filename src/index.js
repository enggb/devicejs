;(function (name, definition) {

	var hasDefine = typeof define === 'function';
	var hasExports = typeof module !== 'undefined' && module.exports;

	if (hasDefine) {
		// AMD Module or CMD Module
		define(definition);
	} else if (hasExports) {
		// Node.js Module
		module.exports = definition();
	} else {
		// Assign to common namespaces or simply the global object (window)
		this[name] = definition();
	}
})('devicejs', function () {



});