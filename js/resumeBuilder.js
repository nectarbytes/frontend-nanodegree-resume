

var name = "Laura Curley";
var role = "Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var bio = {
	"name" : "Laura Curley",
	"role" : "Developer",
	"contacts" : {
		"mobile" : "0411 101 454",
		"email" : "laura@incling.com.au",
		"location" : "Bangalow"
	},
	"welcomeMessage" : "lorem ipsum dolor sit amet etc etc.",
	"skills" : [
		"awesomeness", "delivering things", "cryogenic sleeping", "saving the universe"
	],
	"bioPic" : "images/fry.jpg"
}

var work = {
	"jobs" : [
		{
			"employer" : "",
			"title" : "",
			"location" : "",
			"dates" : "",
			"description" : ""
		},
		{
			"employer" : "",
			"title" : "",
			"location" : "",
			"dates" : "",
			"description" : ""
		}
	]	
}

var projects = {
	"projects" : [
		{
			"title" : "",
			"dates" : "",
			"description" : "",
			"images" : [
				{
					"image1" : "url",
					"image2" : "url"
				}
			]
		},
		{
			"title" : "",
			"dates" : "",
			"description" : "",
			"images" : [
				{
					"image1" : "url",
					"image2" : "url"
				}
			]
		}
	]
}

var education = {
	"schools" : [
		{
			"name" : "University of North Carolina",
			"degree" : [
				{
					"first" : "Master of Landscape Architecture"
				}
			],
			"location" : "Raleigh, North Carolina, USA",
			"dates" : "",
			"url" : "www.unc.edu"
		},
		{
			"name" : "University of North Carolina",
			"degree" : [
				{
					"first" : "Master of Landscape Architecture"
				}
			],
			"location" : "Raleigh, North Carolina, USA",
			"dates" : "",
			"url" : "www.unc.edu"
		}
	],
	"onlineCourse" : [
		{
			"title": "",
			"school" : "",
			"dates" : "",
			"url" : ""
		},
		{
			"title": "",
			"school" : "",
			"dates" : "",
			"url" : ""
		}
	]
}

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(bio.name);
$("#header").append(education.degree);



