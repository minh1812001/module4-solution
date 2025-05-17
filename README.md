# module4-solution

 Module 4 Assignment Instructions.

 The idea of this assignment is to take an existing array of names
 and then output either Hello 'Name' or Good Bye 'Name' to the console.
 The program should say "Hello" to any name except names that start with a "J"
 or "j", otherwise, the program should say "Good Bye". So, the final output
 on the console should look like this:

Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!



 STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
 See Lecture 52, part 2


 STEP 3: Create an object, called 'helloSpeaker' to which you will attach
 the "speak" method and which you will expose to the global context
 See Lecture 52, part 1
 var helloSpeaker =

 DO NOT attach the speakWord variable to the 'helloSpeaker' object.


 STEP 4: Rewrite the 'speak' function such that it is attached to the
 helloSpeaker object instead of being a standalone function.
 See Lecture 52, part 2

 STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
 'helloSpeaker' on the global scope as well.
 See Lecture 52, part 2
 (Note, Step 6 will be done in the SpeakGoodBye.js file.)
 xxxx.xxxx = helloSpeaker;

 NOTE! The steps in this file are basically identical to the ones you
 performed in the SpeakHello.js file.

 STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
 See Lecture 52, part 2


 STEP 7: Create an object, called 'byeSpeaker' to which you will attach
 the "speak" method and which you will expose to the global context
 See Lecture 52, part 1
 var byeSpeaker =

 DO NOT attach the speakWord variable to the 'byeSpeaker' object.


 STEP 8: Rewrite the 'speak' function such that it is attached to the
 byeSpeaker object instead of being a standalone function.
 See Lecture 52, part 2


 STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
 'byeSpeaker' on the global scope as well.
 xxxx.xxxx = byeSpeaker;
