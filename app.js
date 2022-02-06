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

 module.exports = { add, greeting, trueTask, book, NumToStr };