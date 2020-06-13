// const Calculator = require('../src/calc.js')
import Calc  from '../src/calc.js';

// describe("tests for sum function", () => {
//   test("sum(2,2) equals 4", () => {
//     expect(sum(2,2)).toEqual(4);
//   })

//   test("sum(2,3) equals 5", () => {
//     expect(sum(2,3)).toEqual(5);
//   })
// })
describe("tests for Calc", () => {

  describe("#sum", () => {
    test("sum(2,2) equals 4", () => {
      let calc = new Calc
      expect(calc.sum(2,2)).toEqual(4);
    })

    test("sum(2,3) equals 5", () => {
      let calc = new Calc
      expect(calc.sum(2,3)).toEqual(5);
    })
  })

  describe("#multi", () => {
    test("multi(2,2) equals 4", () => {
      let calc = new Calc
      expect(calc.multi(2,2)).toEqual(4);
    })

    test("multi(2,3) equals 6", () => {
      let calc = new Calc
      expect(calc.multi(2,3)).toEqual(6);
    })
  })

  describe("#tf", () => {
    test("tf(2,2) equals 2", () => {
      let calc = new Calc
      expect(calc.tf(2,2)).toEqual(2);
    })

    test("multi(2,3) equals 6", () => {
      let calc = new Calc
      expect(calc.tf(2,3)).toEqual(3);
    })

    test("multi(2,3) equals 6", () => {
      let calc = new Calc
      expect(calc.tf(2,3)).toEqual(3);
      expect(2 + 2).toBe(4);
      expect('a').toBe('a');
      // expect('a' + 'a').toBe('a');

      //         ● tests for Calc › #tf › multi(2,3) equals 6

      //     expect(received).toBe(expected) // Object.is equality

      //     Expected: "a"
      //     Received: "aa"

      expect('a' + 'a').toEqual('a');

      // ● tests for Calc › #tf › multi(2,3) equals 6

      // expect(received).toEqual(expected) // deep equality

      // Expected: "a"
      // Received: "aa"

    })
  })
})
