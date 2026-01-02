//* 1.Task: Array Filtering and Mapping

// Interface for personsData
interface IPerson {
  name: string;
  age: number;
  gender: "Male" | "Female";
}

// Data of people
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
const getMaleNames = (peopleData: IPerson[]) => {
  const filteredData = peopleData.filter(
    (person) => person.gender !== "Female"
  );

  const result = filteredData.map((person) => person.name);
  return result;
};

console.log(getMaleNames(people));
