//Punto 2 class inheritance

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (typeof eventName === "string" && typeof callback === "function") {
      if (this.events[eventName]) {
        console.log("error event name has exist");
      } else {
        this.events[eventName] = callback;
        console.log(this.events);
      }
    } else {
      console.log("parameters are invalid");
    }
  }

  emit(eventName) {
    if (this.events[eventName]) {
      this.events[eventName]();
    } else {
      console.log("eventName is empty");
    }
  }

  off(eventName, callback) {
    if (typeof eventName === "string" && typeof callback === "function") {
      if (
        this.events[eventName] &&
        this.events[eventName].toString() == callback.toString()
      ) {
        delete this.events[eventName];
      }
    }
  }
}

//Punto 4 Mixins

const social = (SuperClass) =>
  class extends SuperClass {
    share(friendName) {
      console.log(friendName + " " + "share" + " " + this.title);
    }

    like(friendName) {
      console.log(friendName + " " + "likes" + " " + this.title);
    }
  };

class Movie extends social(EventEmitter) {
  constructor(title, releaseYear, duration) {
    super(),
      (this.title = title),
      (this.releaseYear = releaseYear),
      (this.duration = duration),
      (this.actors = []),
      (this.playing = false);
  }

  play() {
    if (this.playing == false) {
      this.playing = true;
      console.log("The play event has been emited");
    }
  }

  pause() {
    if (this.playing == true) {
      this.playing = false;
      console.log("The pause event has been emited");
    }
  }

  resume() {
    play();
    console.log("The resume event has been emited");
  }

  //Punto 3 working whith classes

  addCast(cast) {
    this.actors = [].concat(this.actors, cast);

    //if (typeof cast === "array") {
    //cast.forEach((element) => {
    //this.actors.push(element);
    //});
    //} else {
    //this.actors.push(cast);
    //}
  }
}

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Logger {
  constructor(userName, pasword) {
    this.userName = userName;
    this.pasword = pasword;
  }
}

const movie1 = new Movie("Avengers", 2012, 2);
const eventEmitter = new EventEmitter();
const actor = new Actor("Angelina Jolie", 40);
const actor2 = new Actor("Robert Deniro", 56);
const cast = [
  new Actor("Pedro Sanchez", 36),
  new Actor("Franchella", 60),
  new Actor("Ricardo Darin", 58),
];

console.log(movie1);

movie1.play();

console.log(movie1);

console.log(eventEmitter.events);

//setTimeout(() => eventEmitter.on("play", () => console.log("holis")), 15000);

//eventEmitter.on("play", () => console.log("holis"));

//eventEmitter.emit("play");

//eventEmitter.off("play", () => console.log("holis"));

//eventEmitter.emit("play");

//eventEmitter.on("off", () => console.log("bye :3"));

//console.log(Object.keys(eventEmitter.events)); //recorrer las claver del objeto

movie1.addCast(actor);
movie1.addCast(actor2);
movie1.addCast(cast);
console.log(movie1.actors);

movie1.like("EmilianoHernandez");

movie1.share("EmilianoHernandez");
