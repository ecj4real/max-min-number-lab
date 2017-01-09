(function() {
  'use strict';

  var myApp = require('../app/maxmin');
  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3, 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [15, 54] for [41, 54, 44, 15, 20]', function () {
        expect(myApp.findMinMax([41, 54, 44, 15, 20])).toEqual([15, 54]);
      });

      it('should return [18, 55] for [55, 34, 20, 18]', function () {
        expect(myApp.findMinMax([55, 34, 20, 18])).toEqual([18, 55]);
      });

      it('should return [0, 10] for [0, 2, 4, 6, 8, 10]', function () {
        expect(myApp.findMinMax([0, 2, 4, 6, 8, 10])).toEqual([0, 10]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [15] for [15, 15, 15, 15, 15, 15, 15]', function () {
        expect(myApp.findMinMax([15, 15, 15, 15, 15, 15, 15])).toEqual([15]);
      });

      it('should return [6] for [6, 6]', function () {
        expect(myApp.findMinMax([6, 6])).toEqual([6]);
      });

      it('should return [1] for [1]', function () {
        expect(myApp.findMinMax([1])).toEqual([1]);
      });

    });

  });

})();