// /* eslint-disable no-undef */
'use strict'



const {
    findPairWithSum,
    NonConstructibleChange
} = require('./Challenge')


describe('findPairWithSum', () => {
   

    it('Should return [2, 7] with the array [2, 7, 1, 15]', () => {
      expect(findPairWithSum([2, 7, 11, 15], 9)).toEqual([2, 7]);
    });
    it('Should return [] if does not exist a pair of number that sum the targetSum', ()=>{
        expect(findPairWithSum([3, 6, 8, 10], 15)).toEqual([]);
    });
    
   });

describe('NonConstructibleChange', () =>{
    it('Should return 4 with the array [1, 2, 5]', ()=>{
        expect(NonConstructibleChange([1, 2, 5])).toBe(4)
    });
    it('Should return 20 with the array [5, 7, 1, 1, 2, 3, 22]', ()=>{
        expect(NonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toBe(20)
    });
    it('Should return 1 with a empty array', ()=>{
        expect(NonConstructibleChange([])).toBe(1)
    })
})

