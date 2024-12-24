# Unexpected Behavior with Null Values in JavaScript Function

This repository demonstrates an uncommon JavaScript bug related to unexpected behavior when using null values in a function with loose comparison (==). The function `foo` does not correctly handle null values, leading to undefined behavior. 

## Bug Description

The `foo` function is intended to add two numbers. However, it does not properly handle cases where either `a` or `b` is null. When either `a` or `b` is null, the function does not throw an error, but the addition does not take place and the function returns implicitly. This leads to an unexpected result of undefined instead of an error or a clear indication of the null values. 

## Solution

The solution involves using strict equality (===) and explicitly checking for null values, handling them appropriately. The solution also includes input validation for better code clarity and robustness.