// to run only Jest file without run script->  npx jest

// "scripts": "test": "jest"                  npm test
//            "test:watch": "jest --watch"    npm run test:watch      
// jestjs.io/docs DOCUMENTATION
const calculator = require("./calculator")

// INLINE TEST EXAMPLE
test("runs our first test", () => {
   expect(1+1).toBe(2)
})

//----------------------------------------------------
describe("calculator unit tests", () => {

   it("adds numbers together", ()=> {
      expect( calculator.sum(2,2) ).toBe(4) // example of possible false positive
      expect( calculator.sum(3,2) ).toBe(5)
      expect( calculator.sum(1,0) ).toBe(1)
      expect( calculator.sum(-1,1) ).toBe(0)       // negative num
      expect( calculator.sum(1) ).toBe(1)          // one param
      expect( calculator.sum() ).toBe(0)           // no params
      //expect( calculator.sum("3","2") ).toBe(5)  // string
      expect( calculator.sum(1000000000,2000000000) ).toBe(3000000000) // large number

      // REFACTORING -> NEW CODE 
      expect( calculator.sum( 2, 2, 2) ).toBe(6)
      expect( calculator.sum( 1, 2, 3, 4, 5, 6, 7, 8, 9) ).toBe(45)

   })

   it("subtracts", () => {
      expect( calculator.difference(3,2) ).toBe(1)
      expect( calculator.difference(2,2) ).toBe(0)
      expect( calculator.difference(1,2) ).toBe(-1)
      expect( calculator.difference(-1,-2) ).toBe(1)
      expect( calculator.difference(1) ).toBe(1)
      expect( calculator.difference() ).toBe(0)

   })

   it("multiplies", () => {
      expect( calculator.product(2,2) ).toBe(4)
      expect( calculator.product(3,2) ).toBe(6)
      expect( calculator.product(1,0) ).toBe(0)
      expect( calculator.product(-1,1) ).toBe(-1)
      expect( calculator.product(1) ).toBe(1)
      expect( calculator.product() ).toBe(1)
   })

   it("divides", () => {
      expect( calculator.quotient(2,2) ).toBe(1)
      expect( calculator.quotient(3,2) ).toBe(1.5)
      expect( calculator.quotient(-1,1) ).toBe(-1)
      expect( calculator.quotient(1) ).toBe(1)
      expect( calculator.quotient() ).toBe(0)
      expect( () => calculator.quotient(1,0) ).toThrow() // don't want to immediately trigger the error
   })

   // COMPLEX DATA TYPES BEING RETURNED
   // toEqual() for non-primitive
   it("parses", () => {
      expect( calculator.parse( {
            sum: [1,2,3],
            difference: [3,2,1],
            product: [1,2,3],
            quotient: [2,2,2]
         }
      )).toEqual( {
            sum: 6,
            difference: 0,
            product: 6,
            quotient: 0.5
         }
      )
   })

   
})
