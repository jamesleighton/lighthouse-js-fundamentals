const scores = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const sortGrades = scores.filter(function(grade) {
  return (grade >= 70);
});
console.log(sortGrades);