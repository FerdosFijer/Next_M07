//! oop - abstraction (means have idea but real inclementation is not clear)

// idea pai
// clear implemention pore dekbo

/* there is two way for abstraction:
   1. interface
   2. abstract class  */

//* Example 01: // idea here given by interface :

/* interface MediaPlayer {  
  play(): void;
  pause(): void;
  stop(): void;
}

//implementation
class Musicplayer implements MediaPlayer {
  play() {
    console.log("Playing music....");
  }
  pause() {
    console.log("Music paused... ");
  }
  stop() {
    console.log(`Music stopped`);
  }
}

const fijerPlayer = new Musicplayer(); // instance
fijerPlayer.play(); */

//* Example 02: // idea here given by abstract class:

abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

//implementation by making a child class
class fijerPlayer extends MediaPlayer {
  play() {
    console.log(`Playing music...`);
  }
  pause(): void {
    console.log("Music is paused !");
  }
  stop(): void {
    console.log("Music is stopped !");
  }
}

const fijerPlayer1 = new fijerPlayer(); // exapmle 1 e amra instance toiri korsilam r eikan a class ar por amra child class toiri korsi extends er maddome nahole ei line ta inclement hoito na
fijerPlayer1.play();