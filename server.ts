//* 1.Task: Array Filtering and Mapping
interface IPerson {
  name: string;
  age: number;
  gender: "Male" | "Female";
}

const people: IPerson[] = [
  {
    name: "Rahim Ahmed",
    age: 30,
    gender: "Male",
  },
  {
    name: "Ayesha Khan",
    age: 26,
    gender: "Female",
  },
  {
    name: "Tanvir Hossain",
    age: 34,
    gender: "Male",
  },
  {
    name: "Nusrat Jahan",
    age: 22,
    gender: "Female",
  },
  {
    name: "Sajid Hasan",
    age: 40,
    gender: "Male",
  },
];

// getMaleNames function
const getMaleNames = (peopleData: IPerson[]): string[] => {
  const filteredData = peopleData.filter(
    (person) => person.gender !== "Female"
  );

  const result = filteredData.map((person) => person.name);
  return result;
};
console.log("Result of Task-1:", getMaleNames(people));










//* 2.Task: Object Manipulation
interface IBook {
  title: string;
  author: string;
  year: number;
}

const books: IBook[] = [
  {
    title: "Pather Panchali",
    author: "Bibhutibhushan Bandyopadhyay",
    year: 1929,
  },
  {
    title: "Gitanjali",
    author: "Rabindranath Tagore",
    year: 1910,
  },
  {
    title: "Lajja",
    author: "Taslima Nasrin",
    year: 1993,
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    year: 2003,
  },
];

// getBookTitles function
const getBookTitles = (booksData: IBook[]): string[] => {
  const result = booksData.map((book) => book.title);
  return result;
};
console.log("Result of Task-2:", getBookTitles(books));










//* 3.Task: Function Composition
const getSquare = (num: number): number => {
  return num * num;
};
const getDouble = (num: number): number => {
  return num * 2;
};
const addFive = (num: number): number => {
  return num + 5;
};

// composer function
const composerFunction = (num: number): number => {
  return addFive(getDouble(getSquare(num)));
};
console.log("Result of Task-3:", composerFunction(2));










//* 4.Task: Sorting Objects
interface ICar {
  make: string;
  model: string;
  year: number;
}

const cars: ICar[] = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2025,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2018,
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2022,
  },
  {
    make: "BMW",
    model: "X5",
    year: 2019,
  },
];

// sortCars function
const sortCars = (carsData: ICar[]): ICar[] => {
  const result = carsData.sort((a, b) => a.year - b.year);
  return result;
};
console.log("Result of Task-4:", sortCars(cars));










//* 5.Task: Find and Modify
const persons: IPerson[] = [
  {
    name: "Rahim Ahmed",
    age: 30,
    gender: "Male",
  },
  {
    name: "Ayesha Khan",
    age: 26,
    gender: "Female",
  },
  {
    name: "Tanvir Hossain",
    age: 34,
    gender: "Male",
  },
  {
    name: "Nusrat Jahan",
    age: 22,
    gender: "Female",
  },
  {
    name: "Sajid Hasan",
    age: 40,
    gender: "Male",
  },
];

// searchPerson
const searchPerson = (
  personsData: IPerson[],
  name: string,
  age: number
): IPerson[] => {
  const person = personsData?.find((data) => data.name === name);

  if (person) {
    person.age = age;
  }
  return personsData;
};
console.log("Result of Task-5:", searchPerson(persons, "Rahim Ahmed", 35));










//* 6.Task: Array Reduction
const arrayOfNumber = [5, 6, 4, 5, 2, 3];

// sumNums function
const sumOfNumbers = (numbers: number[]): number => {
  const result = numbers.reduce((sum, currentValue) => {
    if (currentValue % 2 === 0) {
      return sum + currentValue;
    }
    return sum;
  }, 0);

  return result;
};
console.log("Result of Task-6:", sumOfNumbers(arrayOfNumber));










//* 7. Task: Leap Year Checker
const isLeapYear = (year: number):boolean => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log("Result of Task-7:", isLeapYear(1996));
