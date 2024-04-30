1. Line 12 prints 3 because the length of the prices array is 3 and the for loop defines 'i' as a var so when it increments to 3 the value is preserved and is accessible outside the scope it is defined in.
2. Line 13 prints 150 because the last value assigned to discountedPrice is when i is 3 so price[i] gives 300 and multiplying that by (1-0.5) gives 150.
3. Line 14 also prints 150 because the last value assigned to finalPrice is when it multiplies discountedPrice by 100 and divides it by 100 giving 150.
4. The function returns an array with all the prices cut in half so it gives [50,100,150] because the program gets each price and multiplies it by 0.5 then pushes it to the discounted array.
5. Line 12 will cause an error because let has a block-scope so 'i' is not defined outside the loop.
6. Line 13 will cause an error because let has a block-scope so 'discountedPrice' is not defined outside the loop.
7. Line 14 will print 150 because it functions the same as before. Even though it is defined with 'let' it is accessed in the same scope it is defined in.
8. The function returns an array with all the prices cut in half so it gives [50,100,150] because the program gets each price and multiplies it by 0.5 then pushes it to the discounted array. The let keywords do not affect the final output.
9. Line 11 will cause an error because let has a block-scope so 'i' is not defined outside the loop.
10. Line 12 prints 3 because the length variable is defined in the same scope as the log statement.
11. The function returns an array with all the prices cut in half so it gives [50,100,150] because the program gets each price and multiplies it by 0.5 then pushes it to the discounted array. The let and const keywords do not affect the final output.
12. Object notations
    A. student.name;
    B. student["Grad Year"];
    C. student.greeting();
    D. student["Favorite Teacher"].name;
    E. student.courseLoad[0];
13. Arithmetic
    A. '32' because it treats both as strings and just concatenates them
    B. 1 because you cannot subtract strings so it assums this is integer subtraction
    C. 3 because null is just 0
    D. '3null' because it concatenates them
    E. 4 because true=1
    F. 0 because both false and null are 0
    G. '3undefined' because it cannot perform addition on undefined
    H. Nan because undefined is not subtractable so there is nothing else it can do
14. Comparision
    A. true because it coerces to integers and compares
    B. false because comparing strings causes a character by character comparision and 1 is less than 2.
    C. true because non strictly equal
    D. false because not same object
    E. false because true converts to 1 and 1 does not equal 2
    F. true because 2 converted to boolean is true
15. == checks for non-strict equality so if they evaluate to similar things but are not the same type it results true while === checks for strict equality so they have to be the same type.
    
17- The result is [2,4,6] because the function loops through the elements in the input array and sends each element to the callback function which multiplies the numbers by 2 and then gets pushed to the new array.
    
19- 1 4 3 2, this is because 2 is delayed by a second and 3 is delayed slightly while 1 and 4 are logged instantly.
