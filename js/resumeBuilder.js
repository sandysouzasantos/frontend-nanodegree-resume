var bio = {
    "name": "Sandy Souza",
    "role": "Web Developer",
    "contacts": {
        "email": "sandysouzasantos@gmail.com",
        "mobile": "+55 31 999 165 082",
        "github": "sandysouzasantos",
        "location": "Belo Horizonte, MG, Brazil"
    },
    "picture": "images/me.jpeg",
    "welcomeMessage": "Hello World!",
    "skills": ["awesomeness", "programming", "JS"]
};

var work = {
    "jobs": [
        {
            "position": "Web Developer",
            "employer": "Freelancer",
            "years": "2016 - Currently",
            "location": "Belo Horizonte, MG, Brazil",
            "description": "Frontend development. HTML5, CSS3, Bootstrap, Javascript, jQuery, Blade (Laravel)."
        },
        {
            "position": "Lawyer",
            "employer": "Freelancer, Escritório Rosi e Rajão e Ney Campos",
            "years": "2015 - 2016",
            "location": "Belo Horizonte, MG, Brazil",
            "description": "Worked as a lawyer for various firms, drafting contracts, collection actions, labor and civil lawsuits, and intellectual property consulting."
        }
    ]
};

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
};

var projects = {
    "project": [
        {
            "title": "ForSocios",
            "url": "https://www.forsocios.com/",
            "dates": "2016",
            "images": "images/forsocios.jpg",
            "description": ["HTML5", "CSS3"]
        },
        {
            "title": "LinceApp",
            "url": "https://www.linceapp.com/",
            "dates": "2016",
            "images": "images/linceapp2.jpg",
            "description": ["HTML5", "CSS3", "JS", "PHP", "Bootstrap"]
        }

    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName + formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#topContacts").append(formattedEmail + formattedMobile + formattedGithub + formattedLocation);

$("#header").append(formattedPic + formattedMsg);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}

var displayWork = function () {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        $(".work-entry:last").append(formattedEmployer + formattedPosition);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
};

displayWork();

function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
        locationArray.push(work_obj.jobs[job].location);
    }
    return locationArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

$("#main").append(internationalizeButton);

var inName = function () {
    var finalName = bio.name;
    var name = bio.name.trim().split(" ");
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    finalName = name.join(" ");
    return finalName;
};

console.log(inName());

//$().click(inName(bio));

projects.display = function () {
    for (proj in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var formattedDate = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
        var formattedImages = HTMLprojectImage.replace("%data%", projects.project[proj].images);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDate);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedImages);
    }
};

projects.display();

$("#mapDiv").append(googleMap);