const exec = require('mz/child_process').exec;
const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app');
/*
builds application does just that.  This test will take a while to run so
Default Timeout has been changed, but it is set back after test runs.

The remaining tests here are to just be sure that the server is running
correctly by checking that index.html is being served along with favicon
and the graphQL endpoint is responding to a default query with error
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

describe('express serving', () => {
  test('responds to / with the index.html', () => {
    return request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => expect(res.text).to.contain('<div id="root"></div>'));
  });

  test('responds to favicon.icon request', () => {
    return request(app)
      .get('/favicon.ico')
      .expect('Content-Type', 'image/x-icon')
      .expect(200);
  });

  test('responds to any route with the index.html', () => {
    return request(app)
      .get('/foo/bar')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => expect(res.text).to.contain('<div id="root"></div>'));
  });

  test('responds to the basic graphQL route with proper errors', () => {
    return request(app)
      .get('/graphql?query')
      .expect('Content-Type', /json/)
      .expect(400)
      .then(res => expect(res.body.errors).to.exist);
  })
});
