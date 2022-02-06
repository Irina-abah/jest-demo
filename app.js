const add = (num1, num2) => {
  return num1 + num2;
 };

 // challenges

 //challenge 1

const greeting = (name) => {
  if (!name) {
    return "Please provide with your name"; 
  }
  return { message: `Hello, ${name}!` };
};

// challenge 2 and 3

const trueTask = () => {
  return true;
}

// challenge 4

const book = (title, author) => {
  let bookItem = {
    title: title,
    author: author
  }

  return bookItem;
}

// challenge 6

const NumToStr = (num) => {
  return num.toString();
}

// challenge 7

const planets = [ "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

const whichPlanet = (num) => {
  return planets[num-1]
}

// challenge 8

const students = [true, true, true, false, true, true, true, true, false, true];

const countStudents = (arr) => {
  let present = [];

  arr.forEach((i) => {
    console.log(i)
    if (i === true) {
      present.push(i)
    }
  })
  return present.length;
}

countStudents(students);

// challenge 9

// Square every digit and concatenate them (must return an integer)
// (squareDigi(34) //will return 916) 

// challenge 10 

const century = (year) => {
  return Math.floor(year / 100);
};

 module.exports = { add, greeting, trueTask, book, NumToStr, whichPlanet, countStudents, century };