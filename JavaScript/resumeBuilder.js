
// var name = "Kei Hayashi";
// var role = "Backend Software Engineer";

var bio = {
  "name" : "Reem Alharthi",
  "role" : "Student of information system",
  "contacts" : {
    "mobile" : "+966555091973",
    "email" : "ReemAlharthi1998@gmail.com",
    "github" : "REEM1004",
    "twitter" : "@REEM1004",
    "location" : "Riyadh"
  },
  "welcomeMessaege" : "Welcome to my resume page.",
  "skills" : [["Programming Languages:","SQL", "Java", "VB.NET", "HTML5", "CSS"],
              ["Frameworks:", "none"],
              ["Other:", "Git/Github", "Uinux"],
              ["Languages:", "Arabic", "and English"]],
  "biopic" : "images/hijab emoji.png"
}

var projects = {
  "projects" : [
     {
      "title" : "ViewEven",
      "dates" : "2017",
      "description" : "I worked with group on a project in System Analysis and design course called ViewEvent, we used our Analysis skills to create and design website that view events that happened in our college.",
      "images" : []
    }, {
       "title" : "SAR",
      "dates" : "2018",
      "description" : "In Database System course we worked as a group on to design database system for Railway Reservation System like “SAR” using SQL.",
      "images" : []
    } , {
      "title" : "calculate Dijkistra’s shortest path algorithm",
      "dates" : "2018",
      "description" : "In the Mathematical Modelling for information system we developed Java application to calculate Dijkistra’s shortest path algorithm.",
      "images" : []
    }
  ]
}

var work = {
  "jobs" : [
      {
      "title" : "",
      "employer" : "",
      "location" : "",
      "dates" : "",
      "description" : ""
    }
  ]
}

var education = {
	
  "schools" : [
    {
      "name" : "King Saud University",
      "location" : "Riyadh",
      "dates" : "2016-now",
      "degree" : "BA",
      "url" : "https://edugate.ksu.edu.sa/ksu/init",
      "majors" : ["Information System"]
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Robotic process automation",
      "school" : "Uipath academy",
      "dates" : "2019",
      "url" : "https://academy.uipath.com/learn"
    }
  ]
}




var Name = HTMLheaderName.replace("%data%", bio.name);
var Role = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(Role);
$("#header").prepend(Name);

var Twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(Twitter);
var Github = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(Github);
var Location = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(Location);
var Mobile  = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(Mobile );
var Email = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(Email);

var Picture = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(Picture);


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsTitle);
  for (i = 0; i < bio.skills.length; i++) {
    $("#header").append(HTMLskillsStart);
    for (j = 0; j < bio.skills[i].length; j++) {
      var Skills = HTMLskills.replace("%data%", bio.skills[i][j]);
      console.log(Skills);
      $(".skills:last").append(Skills);
    }
  }
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var Title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(Title);
    var Dates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(Dates);
    var Description = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(Description);
  }
}
projects.display();

education.display = function() {
  for (school in education.schools) { // education in school
    $("#education").append(HTMLschoolStart);
    var Name = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(Name);
    var Degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(Degree);
    var Dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(Dates);
    var Location = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(Location);
    for (i = 0; i < education.schools[school].majors.length; i++) {
      var Major = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
      $(".education-entry:last").append(Major);
    }
  }
  $("#education").append(HTMLonlineClasses);
  for (online in education.onlineCourses) { // education in online 
    $("#education").append(HTMLschoolStart);
    var Title = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
    $(".education-entry:last").append(Title);
    var School = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
    $(".education-entry:last").append(School);
    var Dates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
    $(".education-entry:last").append(Dates);
    var URL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
    $(".education-entry:last").append(URL);
  }
}
education.display();

$("#mapDiv").append(googleMap);
//<iframe src = "https://goo.gl/maps/ypjqgffN3us3kEKo7" width= "600" height = "450" frameborder = "0" style = "borde.0" allowfullscreen /iframe>
