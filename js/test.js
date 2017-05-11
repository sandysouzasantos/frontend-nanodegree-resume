var myName = "Sandy Souza";

var myRole = "Web Developer";

var mySkills = ["awesomeness", "programming", "JS"];

var formattedName = HTMLheaderName.replace("%data%", myName);

var formattedRole = HTMLheaderRole.replace("%data%", myRole);

//$("#header").prepend(formattedName + formattedRole);

var bio = {
    name: myName,
    role: myRole,
    contacts: {
        email: "sandysouzasantos@gmail.com",
        mobile: "+55 31 999 165 082",
        github: "sandysouzasantos",
        location: "Belo-Horizonte"
    },
    picture: "images/me.jpeg",
    welcomeMessage: "Hello World!",
    skills: mySkills
};

/*var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
 var formattedEmail = HTMLemail.replace("%data%", bio.email);
 var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
 var formattedSkills = HTMLskills.replace("%data%", bio.skills);

 $("#main").append(formattedPic);
 $("#topContacts").append(formattedEmail);
 $("#topContacts").append(formattedMobile);
 $("#topContacts").append(formattedSkills);*/

var work = {
    position: "Web Developer",
    employer: "Freelancer"
};

work.years = 1;
work.city = "Belo-Horizonte";

var education = {
    "schools": [
        {
            "name": "Udacity",
            "city": "Silicon Valley, CA, US",
            "degree": "Nanodegree",
            "major": ["Frontend Development", "HTML", "CSS", "JS"]
        },
        {
            "name": "Universidade Federal de Viçosa",
            "city": "Viçosa, MG, Brazil",
            "degree": "BA",
            "major": ["Law School"]
        }
    ]
}


/*$("#main").append(work["position"]);
 $("#main").append(education.lastSchool);*/

