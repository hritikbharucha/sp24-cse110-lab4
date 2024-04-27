1. Line 9 prints 20 because sum of num1 and num2 gets stored in result and it is in scope.
2. Line 13 also prints 20 because variables defined by var are accessible outside of the function they are declared in so they are in the scope.
3. Line 9 prints 20 because sum of num1 and num2 gets stored in result and it is in scope.
4. Line 13 causes an error because the variable result is not defined. This is because the let keyword keeps the scope only in the function and not outside.
5. Line 9 does not print anything because there is an error for result getting reassigned. Const prevents you from reassigning the value of variables.
6. Line 13 does not print anything because same as above. It also would be out of scope and cause an undefined error.