# The Problem

For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

# Solution

we want to get common devisor of two strings so in sempler way we want the number that is devisor of "str1.length" and also "str2.length" and then we can cut the biggest string from its bgaininng until the number we got, and that will be the common string

# Algorithm

1 - initialize length two variables "n" ,"m" which are length of "str1" and "str2" respectively

2 - define larger string and stor it in "largerString" variabel

3 - by applaying Euclidean algorithm on "n" and "m" we got the greatest common devisor (GCD)

- The function first checks if m is equal to zero. If it is, then n is the GCD of n and m.
  If m is not equal to zero, then the function recursively calls itself with m and n % m as the new values of n and m respectively. This continues until m becomes zero, at which point n is the GCD of the original two numbers.

now we got the number wich is the GCD of "n" and "m" and store it in "GCD" variable

4 - we cut largerString from 0 index to GCD index, we got and store it in "commonString" variable

5 - we check if two strings when they be concatenated on each others well be equal if thay not we return empty string  

6 - if they equal we return commonString
