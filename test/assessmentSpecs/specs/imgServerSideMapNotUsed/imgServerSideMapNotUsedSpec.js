describe('assessment: imgServerSideMapNotUsed', function () {
  var client, assessments, quailResults, cases;

  // Evaluate the test page with Quail.
  describe('the non-match case', function () {
    before('load webdrivers and run evaluations with Quail', function () {
      return quailTestRunner.setup({
          url: 'http://localhost:9999/imgServerSideMapNotUsed/imgServerSideMapNotUsed-nomatch.html',
          assessments: [
            'imgServerSideMapNotUsed'
          ]
        })
        .spread(function (_client_, _assessments_, _quailResults_) {
          client = _client_;
          assessments = _assessments_;
          quailResults = _quailResults_;
          cases = quailResults.tests.imgServerSideMapNotUsed.cases;
        });
    });

    after('end the webdriver session', function () {
      return quailTestRunner.teardown(client);
    });

    it('should return the correct number of tests', function () {
      expect(quailResults.stats.tests).to.equal(1);
    });
    it('should return the correct number of cases', function () {
      expect(quailResults.stats.cases).to.equal(1);
    });

    it('should have correct key under the test results', function () {
      expect(quailResults.tests).to.include.keys('imgServerSideMapNotUsed');
    });

    it('should return the proper assessment for the test', function () {
      expect(cases[0]).to.have.quailStatus('inapplicable');
    });
  });

  // Evaluate the test page with Quail.
  describe('the match case', function () {
    before('load webdrivers and run evaluations with Quail', function () {
      return quailTestRunner.setup({
          url: 'http://localhost:9999/imgServerSideMapNotUsed/imgServerSideMapNotUsed.html',
          assessments: [
            'imgServerSideMapNotUsed'
          ]
        })
        .spread(function (_client_, _assessments_, _quailResults_) {
          client = _client_;
          assessments = _assessments_;
          quailResults = _quailResults_;
          cases = quailResults.tests.imgServerSideMapNotUsed.cases;
        });
    });

    after('end the webdriver session', function () {
      return quailTestRunner.teardown(client);
    });

    it('should return the correct number of tests', function () {
      expect(quailResults.stats.tests).to.equal(1);
    });
    it('should return the correct number of cases', function () {
      expect(quailResults.stats.cases).to.equal(3);
    });

    it('should have correct key under the test results', function () {
      expect(quailResults.tests).to.include.keys('imgServerSideMapNotUsed');
    });

    it('should return the proper assessment for assert-1', function () {
      expect(cases).quailGetById('assert-1').to.have.quailStatus('failed');
    });
    it('should return the proper assessment for assert-2', function () {
      expect(cases).quailGetById('assert-2').to.have.quailStatus('failed');
    });
    it('should return the proper assessment for assert-3', function () {
      expect(cases).quailGetById('assert-3').to.have.quailStatus('passed');
    });
  });
});