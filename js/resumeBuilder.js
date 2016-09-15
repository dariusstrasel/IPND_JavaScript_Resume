var work = {
    //This JSON object contains all records of my current/previous positions.
    "jobs": [{
        "employer": "Preventure",
        "title": "Jr. Software Developer",
        "location": "Coventry, RI",
        "dates": "August 2016 – Present",
        "description": ""
    }, {
        "employer": "Preventure",
        "title": "Data Analyst",
        "location": "Coventry, RI",
        "dates": "July 2015 –Present",
        "description": "<br>—	Collaborated with Data Operations team thru agile project management techniques via daily stand-ups, weekly huddles, and sprint retrospectives organized via Salesforce.com and Atlassian JIRA software." +
            "<br>—	Increased reporting accuracy and data health by conducting peer code/report reviews for all SQL, SSRS, and Excel sourced projects" +
            "<br>—	Reduced analytics turn-around by implementing automated Excel, Powerpoint, and Access reports thru the use of VBA and SQL stored procedures through our on premise data-warehouse." +
            "<br>—	Lead and supported technology infrastructure solution projects in coordination with development, operations, and vendors such as Atrion, Ricoh, Carousel, InContact, WCS, and Cerner" +
            "<br>—	Managed and reconciled client data contact data sets into Salesforce CRM database and SQL Server" +
            "<br>—	Administrated user accounts and access policies for Salesforce.com, Google Apps Admin, Windows Active Directory, and Amazon Web Services"
    }, {
        "employer": "Darius’ Depictions (Self)",
        "title": "Founder, Web Developer, Media Designer, Photographer",
        "location": "Providence, RI",
        "dates": "January 2014 – Present",
        "description": "<br>—	Managed startup business functions including; finance, social media, client relations and project management" +
            "<br>—	Photographed/post-processed portraits, events and fine art products via Adobe Creative Suite for clients" +
            "<br>—	Designed graphic concepts and ad media for hybrid website and social media marketing"
    }, {
        "employer": "Providence Equity Partners",
        "title": "Desktop Support Technician",
        "location": "Providence, RI",
        "dates": "January 2015 – July 2015",
        "description": "<br>—	Analyzed and designed hardware/software usage data of company-wide computers via SCCM for IT system administration reporting allowing insightful and strategic decisions" +
            "<br>—	Resolved/troubleshooted a combination of over 30 Windows 7 desktop/laptop computers, LAN/WAN settings, printers/copiers, iOS phones/tablets, monitors, speakers and peripherals related issues via ticketing system resulting in proper incident management and excellent customer service" +
            "<br>—	Configured technical buildouts of Windows 7 desktop/laptops including software QA and hardware upgrades such as RAM, GPU, SSD according to exact design specification and follow-up"
    }]
};

var projects = {
    //This JSON object contains data for programming projects I've worked on recently.
    "projects": [{
        "title": "IPND Final Project: Object Orientated JavaScript Resume",
        "dates": "2016-2016",
        "description": "This project utilizes custom JavaScript object methods to generate a HTML/CSS design using" +
            "which is sourced via schemed JSON objects.",
        "URL": "https://github.com/dariusstrasel/IPND_JavaScript_Resume",
        "images": [
            "images/project.jpg"
        ]
    }, {
        "title": "IPND Movie Website Python",
        "dates": "2016-2016",
        "description": "This Python program will generate a movie trailer website using first-order class objects.",
        "URL": "https://github.com/dariusstrasel/IPND_Movie_Website_Python",
        "images": [
            "images/project.jpg"
        ]
    }, {
        "title": "IPND ProfanityChecker Python",
        "dates": "2016-2016",
        "description": "This program will check if a text file contains swear words by querying over REST API.",
        "URL": "https://github.com/dariusstrasel/IPND_ProfanityChecker_Python",
        "images": [
            "images/project.jpg"
        ]
    }, {
        "title": "IPND TwilioRestClient Python",
        "dates": "2016-2016",
        "description": "This program will POST API requests over Twilio's API to send SMS messages to phones.",
        "URL": "https://github.com/dariusstrasel/IPND_TwilioRestClient_Python",
        "images": [
            "images/project.jpg"
        ]
    }, {
        "title": "IPND 2nd Project: Quiz Game",
        "dates": "2016-2016",
        "description": "This Python program will present a mad-lib style quiz ",
        "URL": "https://github.com/dariusstrasel/IPND_2ndProject",
        "images": [
            "images/project.jpg"
        ]
    }, {
        "title": "IPND First Project: HTML/CSS Website",
        "dates": "2016-2016",
        "description": "This is a ficticious HTML/CSS website; it uses vanilla HTML/CSS without JavaScript.",
        "URL": "https://github.com/dariusstrasel/IPND_2ndProject",
        "images": [
            "images/project.jpg"
        ]
    }]
};

var bio = {
    //This JSON object contains basic data for my resume persona.
    "name": "Darius Strasel",
    "role": "Software Engineer",
    "contacts": {
        "email": "strasel.darius@gmail.com",
        "mobile": "305-707-4681",
        "github": "dariusstrasel",
        "location": "1 Chestnut St, Providence, RI"
    },
    "welcomeMessage": "Hello!",
    "skills": [
        "awesomeness", "JavaScript", "HTML", "CSS",
        "Python", "SQL"
    ],
    "biopic": "images/me.jpg"
};

var education = {
    //This JSON object contains data for my educational background.
    "schools": [{
        "name": "Year Up / Community College of Rhode Island",
        "location": "Providence, RI",
        "degree": "A.A.S.",
        "majors": [
            "Computer Science"
        ],
        "dates": "September 2014 – Present",
        "url": "http://www.yearup.org/"
    }],
    "onlineCourses": [{
        "title": "Introduction to Programming",
        "school": "Udacity",
        "dates": "July 2016 – September 2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "Front-End Development",
        "school": "Udacity",
        "dates": "September 2016 – Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

bio.display_skills = function() {
    //This method will append the contents of the bio.skills array to the #header div.
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            //for (var skill in bio.skills) {
            //console.log(bio.skills[skill]);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#header").append(formattedSkill);
        }
    }
};

bio.display = function() {
    //This method will loop through the bio.contacts object to append my contact information.
    //method hasOwnProperty(index) is called on bio.contacts to parse the key value pairs of the
    //object
    //This method will append my profile picture and welcome message to the #header div.
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedPic);
    $("#header").append(formattedMessage);
    for (var index in bio.contacts) {
        if (!bio.contacts.hasOwnProperty(index)) {
            continue;
        }
        var formattedContact = HTMLcontactGeneric.replace("%contact%", [index]);
        formattedContact = formattedContact.replace("%data%", bio.contacts[index]);
        $("#topContacts, #footerContacts").append(formattedContact);
    }
        //This method will append my name and role to the #header div of my resume.
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#navbar-header").prepend(formattedName);
    $("#header").append(formattedRole);
};

/*bio.display_pictureMessage = function() {
    //This method will append my profile picture and welcome message to the #header div.
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedPic);
    $("#header").append(formattedMessage);
};*/

projects.display = function() {
    //This method will loop through the projects object to append any programming projects I've
    //included, into my resume.
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        formattedProjectTitle = formattedProjectTitle.replace("%url", projects.projects[project].URL);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDate);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedProjectImage);
    }
};

work.display = function() {
    //This method will append the contents of the work object to the #workExperience div
    for (var job = 0; job < work.jobs.length; job++) {
        //for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates + formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

education.display = function() {
    //This method will append the contents of the education.schools objects, invoking
    // $("#education").append(HTMLschoolStart) for online schools as well. (Held in same object;
    //different property.)
    for (var school = 0; school < education.schools.length; school++) {
        //for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedDates + formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (var onlineSchool = 0; onlineSchool < education.onlineCourses.length; onlineSchool++) {
        //for (school in education.onlineCourse) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineSchool].title);
        formattedSchoolName = formattedSchoolName.replace("%url%", education.onlineCourses[onlineSchool].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineSchool].school);
        $(".education-entry:last").append(formattedSchoolName + formattedSchool);
        var formattedSchoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineSchool].dates);
        $(".education-entry:last").append(formattedSchoolDates);

    }
};

function startClickLogging() {
    //This function tracks any time a user right clicks while the resume is focused.
    $(document).click(function(loc) {
        var x = loc.pageX;
        var y = loc.pageY;
        logClicks(x, y);
    });
    //This will log the click to the console
    $(document).click(function(loc) {
        console.log(loc.pageX, loc.pageY);
    });
}

function appendGoogleMap() {
    $('#mapDiv').append(googleMap);
}

function appendBackgroundImages() {
    //Basically, I want you to find all background divs and add the "parallax" class and image url, by input
    //TODO: Create a JSON object to hold the background URLS.
    //TODO: Add logic in this function to append the background URLs into the parallax divs.
    //
}

bio.display();
work.display();
projects.display();
bio.display_skills();
education.display();
startClickLogging();
appendGoogleMap();