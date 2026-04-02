``` const arr1 = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Neha" }
];

const arr2 = [
  { id: 1, marks: 90 },
  { id: 2, marks: 85 }
];

const map = new Map();

// Insert first array
for (const student of arr1) {
  map.set(student.id, { ...student });
}

// Merge second array
for (const student of arr2) {
  map.set(student.id, {
    ...map.get(student.id),
    ...student
  });
}

const result = Array.from(map.values());

console.log(result);```