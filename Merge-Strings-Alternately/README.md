# proplem
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other
append the additional letters onto the end of the merged string.

Return the merged string.

# solution
first, we initialize the "mergedResult" variable and we can iterate on each word side by side and put all letters of all word1 and word2 together
if one of the two words ended first (more significant word) the iteration is complete until adding the rest of the second word (smaller word) and the iteration stops 
when two pointers of two terms equal to the length of them

# Algorithm

1 - create two variables "m", and "n" to store the length of word1, word2 respectively

2 - Create an empty string variable "mergerResult" to store the result of merged words

3 - create two pointers "i", and "j" two points to iterate both word1 and word2 respectively and initialize both of them to 0.

4 - while ( i < m || j < n )
    - if (i < m) then we append word1[i] to result. We increment "i" to point to the next index of words. 
    - if (j < n) then we append word2[j] to result. We increment "j" to point to the next index of words. 

5 - Return "mergerResult".


