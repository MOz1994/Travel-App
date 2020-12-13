import { getPic } from "../src/Client/j/getPicture"

describe("Testing get data from API functionality", () => {
  /// input for function
    let city = "Beijing";
    let country = "china";
    let pixKey = '19346321-dd66748d30a384e44d876a9ed';


    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("it shold get data correctly from api", async() => {
       
        const input = getPic(city, country, pixKey);


        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(input).toBeDefined();

    })

});
