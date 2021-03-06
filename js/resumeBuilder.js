var bio = {
    "name": "Sandy Santos",
    "role": "Web Developer",
    "contacts": {
        "email": "sandysouzasantos@gmail.com",
        "mobile": "+55 31 999 165 082",
        "github": "sandysouzasantos",
        "githubUrl": "https://github.com/sandysouzasantos",
        "location": "Belo Horizonte, MG, Brazil"
    },
    "biopic": "images/me.jpeg",
    "welcomeMessage": "If you’d like to hire me, I’d love to hear from you.",
    "skills": ["HTML5", "CSS3", "JS", "Bootstrap", "Foundation", "JQuery", "Grunt", "Web Semantics", "Responsivity", "Frontend Development", "Web Development"],
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedName + formattedRole);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedEmail + formattedMobile + formattedGithub + formattedLocation);
        $("#footerContacts").append(formattedEmail + formattedMobile + formattedGithub + formattedLocation);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedPic + formattedMsg);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function (skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        }
    }
};

var work = {
    "jobs": [
        {
            "title": "Web Developer",
            "employer": "Freelancer",
            "dates": "2016 - In Progress",
            "location": "Belo Horizonte, MG, Brazil",
            "description": "Frontend development. HTML5, CSS3, Bootstrap, Foundation, Javascript, jQuery, Grunt, Blade (Laravel)."
        },
        {
            "title": "Lawyer",
            "employer": "Rosi e Rajão Advogados Associados, Ney Campos Advogados Associados, Freelancer",
            "dates": "2015 - 2016",
            "location": "Belo Horizonte e Região, MG, Brazil",
            "description": "Worked as a lawyer for various firms, drafting contracts, collection actions, labor and civil lawsuits, and intellectual property consulting."
        }
    ],
    "display": function () {
        work.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedPosition = HTMLworkTitle.replace("%data%", job.title);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployer + formattedPosition);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

var education = {
    "schools": [
        {
            "name": "Universidade Federal de Viçosa",
            "location": "Viçosa, MG, Brazil",
            "degree": "BA",
            "majors": ["Law School"],
            "dates": "March, 2010 - December, 2014",
            "url": "http://www.ufv.br/"
        },
        {
            "name": "Colégio Anglo",
            "location": "Patrocínio, MG, Brazil",
            "degree": "High School",
            "majors": ["High School"],
            "dates": "February, 2007 - December, 2009",
            "url": "http://www.colegioabcanglo.com.br/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Frontend Developer Nanodegree",
            "school": "Udacity",
            "dates": "March, 2017 - In progress",
            "url": "https://profiles.udacity.com/p/10395977147"
        },
        {
            "title": "Interactivity with JavaScript",
            "school": "Coursera",
            "dates": "January, 2017",
            "url": "https://www.coursera.org/account/accomplishments/verify/HKPD4GRYGK2H"
        },
        {
            "title": "Advanced Styling with Responsive Design",
            "school": "Coursera",
            "dates": "January, 2017",
            "url": "https://www.coursera.org/account/accomplishments/verify/38RVQSN2T2JX"
        },
        {
            "title": "Introduction to CSS3",
            "school": "Coursera",
            "dates": "December, 2016",
            "url": "https://www.coursera.org/account/accomplishments/verify/6WYL5LMSSUH8"
        },
        {
            "title": "Introduction to HTML5",
            "school": "Coursera",
            "dates": "November, 2016",
            "url": "https://www.coursera.org/account/accomplishments/verify/4G36WLXCVKNQ"
        }
    ],
    "display": function () {
        education.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajors);
        });

        $("#education").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function (course) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedDate = HTMLonlineDates.replace("%data%", course.dates);
            var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedTitle + formattedSchool);
            $(".education-entry:last").append(formattedDate);
            $(".education-entry:last").append(formattedUrl);
        });
    }
};

var projects = {
    "project": [
        {
            "title": "Crawly",
            "url": "http://www.crawly.com.br/",
            "dates": "January, 2017 - In progress",
            "images": ["images/crawly.jpg"],
            "description": "Frontend development of private libraries for a company called Crawly."
        },
        {
            "title": "LinceApp",
            "url": "https://www.linceapp.com/",
            "dates": "February, 2017 - March, 2017",
            "images": ["images/linceapp2.jpg"],
            "description": "Frontend development. HTML5, CSS3, Bootstrap, Javascript, jQuery, Blade (Laravel)."
        },
        {
            "title": "ForSocios",
            "url": "https://www.forsocios.com/",
            "dates": "December, 2016",
            "images": ["images/forsocios.jpg"],
            "description": "Frontend Development. HTML5, CSS3, Bootstrap"
        }
    ],
    "display": function () {
        projects.project.forEach(function (proj) {
            $("#projects").append(HTMLprojectStart);
            var formattedDate = HTMLprojectDates.replace("%data%", proj.dates);
            var formattedTitle = HTMLprojectTitle.replace("%data%", proj.title);
            var formattedDescription = HTMLprojectDescription.replace("%data%", proj.description);
            var formattedImages = HTMLprojectImage.replace("%data%", proj.images);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDate);
            $(".project-entry:last").append(formattedDescription);
            $(".project-entry:last").append(formattedImages);
        });
    }
};

bio.display();

work.display();

function locationizer(work_obj) {
    var locationArray = [];
    work_obj.jobs.forEach(function (job) {
        locationArray.push(job.location);
    });
    return locationArray;
}
// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

//$("#main").prepend(internationalizeButton);

var inName = function () {
    var finalName = bio.name;
    var name = finalName.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    finalName = name.join(" ");
    return finalName;
};

console.log(inName());

projects.display();

education.display();

$(".red-span").after(internationalizeButton);

$("#mapDiv").append(googleMap);

//This is for prevent attacks
/*
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}*/
