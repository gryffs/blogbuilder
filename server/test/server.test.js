const exec = require('mz/child_process').exec;
const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app');
/*
builds application does just that.  This test will take a while to run so
Default Timeout has been changed, but it is set back after test runs.

The remaining tests here are to just be sure that the server is running
correctly by checking that index.html is being served along with favicon
*/
describe('builds application', () => {
  let originalTimeout;
  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
  });
  test('to "build" directory', () => {
    return exec('npm run build');
  });
  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
