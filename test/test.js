var device = require("../src")();
var os = require("os");
require('console-colour')(String);

var assert = require("assert");

assert.cpusEqual = function (cpu1, cpu2) {
	cpu1.forEach(function (v, index) {
		assert.equal(v.model, cpu2[index].model);
		assert.equal(v.speed, cpu2[index].speed);
	});
};

describe('device', function () {

	it('device.tmpdir'.yellow + ' should equal to ' + ' os.tmpdir()'.yellow, function () {
		assert.equal(device.tmpdir, os.tmpdir());
	});

	it('device.endianness'.yellow + ' should equal to ' + ' os.endianness()'.yellow, function () {
		assert.equal(device.endianness, os.endianness());
	});

	it('device.hostname'.yellow + ' should equal to ' + ' os.hostname()'.yellow, function () {
		assert.equal(device.hostname, os.hostname());
	});

	it('device.type'.yellow + ' should equal to ' + ' os.type()'.yellow, function () {
		assert.equal(device.type, os.type());
	});

	it('device.platform'.yellow + ' should equal to ' + ' os.platform()'.yellow, function () {
		assert.equal(device.platform, os.platform());
	});

	it('device.arch'.yellow + ' should equal to ' + ' os.arch()'.yellow, function () {
		assert.equal(device.arch, os.arch());
	});

	it('device.release'.yellow + ' should equal to ' + ' os.release()'.yellow, function () {
		assert.equal(device.release, os.release());
	});

	it('device.uptime'.yellow + ' should equal to ' + ' os.uptime()'.yellow, function () {
		assert.equal(device.uptime, os.uptime());
	});

	it('device.loadavg'.yellow + ' should equal to ' + ' os.loadavg()'.yellow, function () {
		assert.deepEqual(device.loadavg, os.loadavg());
	});

	it('device.totalmem'.yellow + ' should equal to ' + ' os.totalmem()'.yellow, function () {
		assert.equal(device.totalmem, os.totalmem());
	});

	it('device.networkInterfaces'.yellow + ' should equal to ' + ' os.networkInterfaces()'.yellow, function () {
		assert.deepEqual(device.networkInterfaces, os.networkInterfaces());
	});

	it('device.cpus'.yellow + ' should equal to ' + ' os.cpus()'.yellow, function () {
		assert.cpusEqual(device.cpus, os.cpus());
	});

	it('device.EOL'.yellow + ' should equal to ' + ' os.EOL'.yellow, function () {
		assert.equal(device.EOL, os.EOL);
	});
});