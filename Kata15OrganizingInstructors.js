const organizeInstructors = function(instructors) {

  let finalOrganized = {};

  for (let i = 0; i < instructors.length; i ++) {
    let course = instructors[i].course;
    if (course in finalOrganized) {
      finalOrganized[course].push(instructors[i].name);
    } else {
      finalOrganized[course] = [instructors[i].name];
    }
  } return finalOrganized;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));