function findStudentIndex(students, searchStudent) {

	for(let i = 0 ; i<students.length; i++){
		if(students[i] == searchStudent){
			return i
		}
	}
	return -1
}
students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]
searchStudent = "John"
console.log(findStudentIndex(students, searchStudent))
// O(n)