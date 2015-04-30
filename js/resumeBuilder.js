

var name = "Laura Curley";
var role = "Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var bio = {
	"name":"Laura Curley",
	"role":"Developer",
	"contact info":"0411101454",
	"skills":"some skills"
};

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(bio);

