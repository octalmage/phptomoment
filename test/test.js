var assert = require('assert');
var phptomoment = require('../index.js');
describe('phptomoment', function() {
  it('should convert PHP date formats to Moment.js formats.', function() {
    var tests = {
      'F j, Y': 'MMMM D, YYYY',
      'Y-m-d': 'YYYY-MM-DD',
      'm/d/Y': 'MM/DD/YYYY',
      'd/m/Y': 'DD/MM/YYYY',
      'F j, Y g:i a': 'MMMM D, YYYY h:mm a',
      'Y/m/d \\a\\t g:i A': 'YYYY/MM/DD at h:mm A',
      'g:i a \\\\ \\H\\e\\l\\l\\o' : 'h:mm a \\ Hello', // Tricky one, show that formats can have backslashes.
    };

    Object.keys(tests).map(function(obj) {
      assert.equal(phptomoment(obj), tests[obj]);
    });

  });
});
