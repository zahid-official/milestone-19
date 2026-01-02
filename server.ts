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

// console.log(getMaleNames(people));

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

console.log(getBookTitles(books));
