export function greetEveryone(people) {
  return people.map(
    ({ name, surname }) => `Cześć ${name} ${surname}! Miło Cię widzieć ;)`
  );
}
const people = [
  { name: "Adrian", surname: "Majcher" },
  { name: "Kot", surname: "Lisa" },
];

const result = greetEveryone(people);
console.log(result);
