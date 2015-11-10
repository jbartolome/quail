'use strict';

var Case = require('Case');
var NewWindowStringsComponent = require('NewWindowStringsComponent');
var ALinksDontOpenNewWindow = function ALinksDontOpenNewWindow(quail, test) {
  // Links without a target attribute pass.
  test.get('$scope').find('a').not('[target=_new], [target=_blank]').each(function () {
    test.add(Case({
      element: this,
      status: 'passed'
    }));
  });
  // Links with a target attribute pass if the link text indicates that the
  // link will open a new window.
  test.get('$scope').find('a[target=_new], a[target=_blank]').each(function () {
    var $link = $(this);
    var passes = false;
    var i = 0;
    var text = $link.text() + ' ' + $link.attr('title');
    var phrase = '';
    // Test the link text against strings the indicate the link will open
    // in a new window.
    do {
      phrase = NewWindowStringsComponent[i];
      if (text.search(phrase) > -1) {
        passes = true;
      }
      ++i;
    } while (!passes && i < NewWindowStringsComponent.length);
    // Build a Case.
    if (passes) {
      test.add(Case({
        element: this,
        status: 'passed'
      }));
    } else {
      test.add(Case({
        element: this,
        status: 'failed'
      }));
    }
  });
};
module.exports = ALinksDontOpenNewWindow;