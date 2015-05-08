angular.module('waletzkoPortfolio.experience', [
  'ui.router',
  'templates'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('experience', {
        url: '/experience',
        templateUrl: 'experience/_experience.html',
        controller: 'ExperienceCtrl as experienceCtrl'
      })
    ;
  })
  .controller('ExperienceCtrl', function () {
    var experienceCtrl = this;
    
    experienceCtrl.experiences = [
      {"title":"Software Engineer", "company":"Sport Ngin", "about":"At Sport Ngin, we build applications and services to help the heroes of today spend less time on the administrative activities of their organization and more time teaching the qualities of Sport to their athletes. They are our future leaders, doctors, firemen, policewomen, teachers, fathers, mothers and friends.", "description":"I am a full stack ruby on rails developer working on the content management team", "startdate":"12/1/2014", "enddate":"present"},
      {"title":"Software Developer", "company":"C.H. Robinson", "about":"While our tradition of leadership began with our produce and truckload services, we've evolved into an industry-leading 3PL with a comprehensive portfolio of sourcing, transportation, and logistics services. The ongoing challenges of the supply chain industry inspire us to innovate and search for new ideas that challenge limits and extend Beyond Brokerage. Our customers, contract carriers, and suppliers are the beneficiaries of this forward-thinking approach, because we believe they deserve nothing but the best from their 3PL. We are not content to simply meet their expectations—we are committed to exceeding them every single day", "description":"Develop enhancements to global shipping software in an Agile environment. Architect and develop new web service, allowing company internal clients to have cleaner and more organized retrieval of system data. Leadership of implementing new practices, such as unit tests, automatic build, and code reviews resulting in much improved code quality throughout the team. Work in close collaboration with team members, project managers, architects, and business  representatives to better understand development solutions. Research and develop a prototype to explore technology options for future projects.", "startdate":"5/20/2012", "enddate":"11/15/2014"}, 
      {"title":"Developer/Analyst Intern", "company":"C.H. Robinson", "about":"While our tradition of leadership began with our produce and truckload services, we've evolved into an industry-leading 3PL with a comprehensive portfolio of sourcing, transportation, and logistics services. The ongoing challenges of the supply chain industry inspire us to innovate and search for new ideas that challenge limits and extend Beyond Brokerage. Our customers, contract carriers, and suppliers are the beneficiaries of this forward-thinking approach, because we believe they deserve nothing but the best from their 3PL. We are not content to simply meet their expectations—we are committed to exceeding them every single day", "description":"Develop enhancements to global shipping software in an Agile environment. Architect and develop new web service, allowing company internal clients to have cleaner and more organized retrieval of system data. Leadership of implementing new practices, such as unit tests, automatic build, and code reviews resulting in much improved code quality throughout the team. Work in close collaboration with team members, project managers, architects, and business  representatives to better understand development solutions. Research and develop a prototype to explore technology options for future projects.", "startdate":"5/20/2011", "enddate":"8/15/2011"},
      {"title":"Head Teaching Assistant", "company":"Saint John's University", "about":"School.", "description":"Coordinate and organize the computer science teaching assistant team and prepare them for helping their students with labs in a leadership role. Researched VB.net, Matlab, Python, VB6 for creating a new course in the computer science program for Spring 2011.", "startdate":"8/20/2009", "enddate":"5/1/2012"}
    ];
    
    experienceCtrl.title = 'My Experience';
    experienceCtrl.body = 'This is what I\'ve done';   
  })
;