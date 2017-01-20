var assert = require('assert');
var phptomoment = require('../index.js');
var moment = require('moment');
describe('phptomoment', function() {
  it('should convert PHP date formats to Moment.js formats.', function() {
    var tests = {
      'F j, Y': 'MMMM D, YYYY',
      'Y-m-d': 'YYYY-MM-DD',
      'm/d/Y': 'MM/DD/YYYY',
      'd/m/Y': 'DD/MM/YYYY',
      'F j, Y g:i a': 'MMMM D, YYYY h:mm a',
      'Y/m/d \\a\\t g:i A': 'YYYY/MM/DD [a][t] h:mm A',
      'g:i a \\\\ \\H\\e\\l\\l\\o' : 'h:mm a [\\][ ][H][e][l][l][o]', // Tricky one, show that formats can have backslashes.
    };

    Object.keys(tests).map(function(obj) {
      assert.equal(phptomoment(obj), tests[obj]);
    });
  });

  it('should convert PHP date formats to Moment.js formats that work with Moment.js.', function() {
    var testDate = '2017-01-20T20:18:08.679Z';
    var tests = {
      'F j, Y': 'January 20, 2017',
      'Y-m-d': '2017-01-20',
      'm/d/Y': '01/20/2017',
      'Y/m/d \\a\\t g:i A': '2017/01/20 at 8:18 PM',
      'g:i a \\\\ \\H\\e\\l\\l\\o': '8:18 pm \\ Hello',
    };

    Object.keys(tests).map(function(obj) {
      assert.equal(moment.utc(testDate).format(phptomoment(obj)), tests[obj]);
    });
  });
});
