//question 1 /////////////////////////////
var multiplier = {
	sum: 1,
	times: function(num){
	return this.sum = num * this.sum
	},
	
	getCurrentValue: function(){
	return this.sum
 	},
}

multiplier.times();

//q 2 /////////////////////////////////////

//build a constructor for album
function album (album){
	this.album = []
}
// build a constructor for photo and link to album
//make prototype function to add photos to album
function photo(name,location){
	this.name = name,
	this.location = location
}
album.prototype = Object.create(photo.prototype);
album.prototype.addPhoto= function(photo){
	this.album.unshift(photo);
}
//make a prototype function that lists the photos 
album.prototype.listPhotos = function(){
	var len = this.album.length
	for(x=0; x<len;x++){
		console.log(this.album[x])
	}
}
//access the photos 
album.prototype.getPhoto = function(index){
	var i = this.album[index]
	console.log(i)
}

var cat= new photo("cat","virginia");
var dog= new photo("dog","texas")
var hamster= new photo("hamster","new jersey")
var tokyo = new photo("tokyo","japan")
var ibiza = new photo("ibiza","spain")

var places = new album("places")
var animals = new album("animals")

places.addPhoto(tokyo)
places.addPhoto(ibiza)
animals.addPhoto(cat)
animals.addPhoto(dog)
animals.addPhoto(hamster)
console.log(animals)
console.log(places);




// q3 ////////////////////////////////////////

function Parent(gender, age, name, occupation) {
  this.gender = gender;
  this.age = age;
  this.name = name;
  this.occupation = occupation;
}
//make a student constructor and call the parents to share the same parameter
function Student(gender, age, name, occupation) {
  Parent.call(this, gender, age, name, occupation);
}
//make a teacher constructor that also shares the same parameter
function Teacher(gender, age, name, occupation) {
  Parent.call(this, gender, age, name, occupation);
}
//give school an array of classmates
function School() {
  this.classmates = [];
}
//descriotion of parents
Parent.prototype.Description = function () {
  return this.name + " is " + this.gender + ", " + this.age + " years old " + "and a " + this.occupation + ".";
}
//make teacher a prototype of parent
Teacher.prototype = Object.create(Parent.prototype);
//make student also a prototype of parents based on description
Student.prototype = Object.create(Parent.prototype);
//let the parents be able to send the kids to school
School.prototype.addfacultynstudents = function(Parent) {
  this.classmates.push(Parent);
}
//add homies to fill up the school
var kelly = new Parent("female", 28, "Kelly", "artist")
var tim = new Student("male", 12, "Tim", "student");
var sue = new Student("female", 5, "Sue", "student");
var jenny = new Teacher("female", 45, "Jenny", "science teacher");
var bob = new Teacher("male", 58, "bob", "grammar teacher")
var miranda = new Teacher("female", 29, "Miranda", "history teacher");

//you cant have teachers and students without a school.
var skool = new School();
//add faculty and students to the school.
skool.addfacultynstudents(tim);
skool.addfacultynstudents(sue);
skool.addfacultynstudents(jenny);
skool.addfacultynstudents(bob);
skool.addfacultynstudents(miranda);
