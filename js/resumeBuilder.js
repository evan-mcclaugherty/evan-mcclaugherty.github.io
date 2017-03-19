$(function () {
    bio.display();
    work.display();
    projects.display();
    education.display();
    $('#mapDiv').append(googleMap);
    $('#mapDiv').show();
    contacts.display();
})
var bio = {
    name: "Evan McClaugherty",
    role: "Web Developer",
    contacts: {
        mobile: "707-816-2861",
        email: "evan.mcclaugherty@gmail.com",
        linkedin: "https://www.linkedin.com/in/evan-mcclaugherty",
        github: "https://github.com/evan-mcclaugherty",
        location: "Smokey Hill and Arapahoe, Aurora, CO",
        cityState: "Aurora, CO"
    },
    welcomeMessage: "What can I create for you?",
    skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Angular 2",
        "jQuery",
        "SQL",
        "Node.js",
        "API",
        "Express.js",
        "Responsive Web Design"
    ],
    biopic: "images/EvanProfilePic.jpg",
    display: function () {
        $('#header').prepend("<div class='name-container'></div>")
        $('.name-container').prepend(HTMLheaderName.replace('%data%', bio.name));
        $('#name').after(HTMLheaderRole.replace('%data%', bio.role));
        $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
        $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
        var linkedinUrl = "<a target='_blank' href=" + bio.contacts.linkedin + ">evan-mcclaugherty</a>";
        $('#topContacts').append(HTMLlinkedin.replace('%data%', linkedinUrl));
        var githubUrl = "<a target='_blank' href=" + bio.contacts.github + ">evan-mcclaugherty</a>";
        $('#topContacts').append(HTMLgithub.replace('%data%', githubUrl));
        $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.cityState));

        $('.contacts-container').prepend(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append('<hr>');
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            $('#skills').append(HTMLskills.replace('%data%', skill));
        });
        $('#header').show();
        $('#topContacts').show();
    }
}
var work = {
    jobs: [{
        employer: "Digital Fusion",
        title: "Developer",
        cityState: "Lakewood, CO",
        location: "141 Union Blvd #460, Lakewood, CO 80228",
        dates: "October, 2016 - current",
        description: "Responsibilities revolve around the Saleforce Marketing Cloud platform:  Creating, editing, and maintaining landing pages, cloud pages, and microsites.",
        jobUrl: "http://digitalfusion.com/"
    }, {
        employer: "Union Pacific Railroad",
        title: "Diesel Electrician",
        cityState: "Denver, CO",
        location: "1033, 1063 W 48th Ave, Denver, CO 80221",
        dates: "November, 2012 - April, 2016",
        description: "Troubleshoot, maintain, and repair deisel electric locomotives and associated systems.",
        jobUrl: "https://up.jobs/diesel-electrician.html"
    }, {
        employer: "United States Air Force",
        title: "Avionics Specialist",
        cityState: "Fairfield, CA",
        location: "690 Airman Dr, Travis AFB, CA 94535",
        dates: "November, 2007 - November, 2012",
        description: "Troubleshoot, maintain, and repair avionics and navigation systems onboard the KC-10 aircraft.",
        jobUrl: "https://www.thebalance.com/2a5x3-integrated-avionics-systems-3344276"
    }],
    display: function () {
        work.jobs.forEach(function (job) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title));
            $('.work-entry:last a').attr({
                href: job.jobUrl,
                target: "_blank"
            });
            $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates));
            $('.work-entry:last').append(HTMLworkLocation.replace('%data%', job.cityState));
            $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
        });
        $('#workExperience').show();
    }
}

var projects = {
    projects: [{
        title: "Happy Tracker",
        dates: "Jul, 2016",
        description: "Happy Tracker is an app to help you find happy hours in Denver.",
        url: "https://happytracker.herokuapp.com/",
        images: [
            "images/HappyTracker_ik5q42_c_scale,w_944.png"
        ]
    }],
    display: function () {
        projects.projects.forEach(function (project) {
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title));
            $('.project-entry:last a').attr({
                href: project.url,
                target: "_blank"
            });
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%', project.images[0]));
        });
        $('#projects').show();
    }
}

var education = {
    schools: [{
        name: "Galvanize",
        cityState: "Denver, CO",
        location: "1644 Platte St, Denver, CO 80202",
        degree: "Web Development Immersive",
        dates: "April, 2016 - October, 2016",
        url: "https://new.galvanize.com/denver/web-development?_ga=1.64255343.1134856722.1489871596#curriculum"
    }, {
        name: "National University",
        cityState: "San Diego, CA",
        location: "9388 Lightwave Ave, San Diego, CA 92123",
        majors: [
            "Accounting"
        ],
        degree: "Bachelor of Science",
        dates: "2009-2012",
        url: "http://www.nu.edu/OurPrograms/SchoolOfBusinessAndManagement/AccountingAndFinance/Programs/BSAccountancy.html"
    }],
    display: function () {
        education.schools.forEach(function (school) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName.replace('%data%', school.name) + HTMLschoolDegree.replace('%data%', school.degree));
            $('.education-entry:last a').attr({
                href: school.url,
                target: "_blank"
            });
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.cityState));
            if (school.majors !== undefined) {
                $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', school.majors[0]));
            } else {
                $('.education-entry:last').append('<em><br></em>');
            }
        });
        $('#education').show();
    }
}

var contacts = {
    display: function () {
        var githubUrl = "<a target='_blank' href=" + bio.contacts.github + ">evan-mcclaugherty</a>";
        var linkedinUrl = "<a target='_blank' href=" + bio.contacts.linkedin + ">evan-mcclaugherty</a>";
        $('#footerContacts').append(HTMLmobileFooter.replace('%data%', bio.contacts.mobile));
        $('#footerContacts').append(HTMLemailFooter.replace('%data%', bio.contacts.email));
        $('#footerContacts').append(HTMLlinkedinFooter.replace('%data%', linkedinUrl));
        $('#footerContacts').append(HTMLgithubFooter.replace('%data%', githubUrl));
        $('#footerContacts').append(HTMLlocationFooter.replace('%data%', bio.contacts.cityState));
        $('#lets-connect').show();
    }
}
