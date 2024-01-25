// /* eslint-disable no-undef */
'use strict'



const {
    findPairWithSum
} = require('./twoNumbersSum')


describe('findPairWithSum', () => {
   

    it('Should return [2, 7] with the array [2,7,1,15]', () => {
      expect(findPairWithSum([2, 7, 11, 15], 9)).toEqual([2, 7]);
    });
    it('Should return [] if does not exist a pair of number that sum the targetSum', ()=>{
        expect(findPairWithSum([3, 6, 8, 10], 15)).toEqual([]);
    });
    
   });