// Show or hide edit player form based on search value
function showForm() {
  document.getElementById("show-form").style.display = "block";
  document.getElementById("show-button").style.display = "block";
}

// Players by Country Chart
function teamChart() {
  new Chart(document.getElementById("doughnut-chart"), {
    type: "doughnut",
    data: {
      labels: ["Spain", "England", "Brazil", "Wales", "Portugal"],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "#3e95cd",
            "#c45850",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
          ],
          data: [473, 703, 609, 209, 90],
          hoverOffset: 6,
          datalabels: {
            color: "white",
            font: {
              weight: "bold",
            },
          },
        },
      ],
    },
    options: {
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
      title: {
        display: true,
        text: "All time matches won by the Top 5 teams",
      },
    },
    plugins: [ChartDataLabels],
  });
}

// Players by Position Chart
function playersChart() {
  new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
      labels: [
        "Striker",
        "Mid Fielder",
        "Center Back",
        "Right Back",
        "Goal Keeper",
      ],
      datasets: [
        {
          label: "Striker",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: [160, 290, 100, 105, 70],
          datalabels: {
            color: "white",
            font: {
              weight: "bold",
            },
          },
        },
      ],
    },
    options: {
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Number of Players by Position",
      },
      scales: {
        y: {
          grace: "1%",
        },
      },
    },
    plugins: [ChartDataLabels],
  });
}

// Top Goal Scorers Chart
function goalsChart() {
  var xValues = [
    "Cristiano Ronaldo",
    "Harry Kane",
    "Son Heung Min",
    "Kevin De Bruyne",
    "Erling Haaland",
    "Darwin Nunez",
    "Virgil Van Dijk",
    "Trent Alexander Arnold",
    "Thiago Alcantara",
    "Thiago Silva",
    "Mohammad Salah",
  ];
  var yValues = [350, 247, 107, 57, 153, 48, 70, 35, 21, 37, 24];
  var barColors = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(255, 159, 64, 0.5)",
    "rgba(255, 205, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(201, 203, 207, 0.5)",
    "rgba(255,215,0,0.5)",
    "rgba(0,0,255,0.5)",
    "rgba(255,177,78,0.5)",
    "rgba(15,194,69,0.5)",
  ];

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
          label: "Cristiano Ronaldo is the leading goal scorer",
          datalabels: {
            color: "gray",
            font: {
              weight: "bold",
            },
          },
        },
      ],
    },
    options: {
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
      legend: { display: false },
      title: {
        display: true,
        text: "Goals Scored in Premier League",
      },
    },
    plugins: [ChartDataLabels],
  });
}

// Login page Functions
function register() {
  var LoginForm = document.getElementById("LoginForm");
  var RegForm = document.getElementById("RegForm");
  var Indicator = document.getElementById("Indicator");
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(150px)";
}
function login() {
  var LoginForm = document.getElementById("LoginForm");
  var RegForm = document.getElementById("RegForm");
  var Indicator = document.getElementById("Indicator");
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(280px)";
  Indicator.style.transform = "translateX(25px)";
}

// login page register form validations
function RegisterValid() {
  const runame = document.getElementById("unamer").value;
  const ruemail = document.getElementById("emailr").value;
  const rupass = document.getElementById("passr").value;

  var runameerr = true;
  var ruemailerr = true;
  var rupasserr = true;

  var pwd_expression =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var alphanums = /^[A-Za-z]+$/;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if ((ruemail === "") | (ruemail == null)) {
    ruemailerr = false;
    alert("Please enter your user email id");
  } else if (!filter.test(ruemail)) {
    ruemailerr = false;
    alert("Invalid email");
  } else if ((runame === "") | (runame == null)) {
    runameerr = false;
    alert("Please enter the user name.");
  } else if (!alphanums.test(runame)) {
    runameerr = false;
    alert("User name field has alphabets only");
  } else if ((rupass === "") | (rupass == null)) {
    rupasserr = false;
    alert("Please enter Password");
  } else if (!pwd_expression.test(rupass)) {
    rupasserr = false;
    alert(
      "Minimun 1 upper case, 1 lower case, 1 special character and 1 Numeric are required in Password"
    );
  } else if (rupass.length < 8) {
    rupasserr = false;
    alert("Password minimum length is 8");
  } else if (rupass.length > 12) {
    rupasserr = false;
    alert("Password maximum length is 12");
  }

  if (rupasserr == true && runameerr == true && ruemailerr == true) {
    document.getElementById("RegForm").submit();
  }
}

// Login page login form validations
function LoginValid() {
  var luname = document.getElementById("uname").value;
  var lpass = document.getElementById("pass").value;

  var lunameerr = (lpasserr = true);

  var pwd_expression =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var alphanums = /^[A-Za-z]+$/;

  if ((luname === "") | (luname == null)) {
    lunameerr = false;
    alert("Enter user name");
  } else if ((lpass === "") | (lpass == null)) {
    lpasserr = false;
    alert("Enter password");
  }

  if (lpasserr == true && lunameerr == true) {
    document.getElementById("LoginForm").submit();
  }
}

// player Form validations function
function formValidations() {
  document
    .querySelector(".form-submit")
    ?.addEventListener("click", function () {
      validateForm();
    });
}

function printError(elemId, hintMsg, eID) {
  document.getElementById(eID).style.marginBottom = 0;
  document.getElementById(elemId).style.marginBottom = "2rem";

  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
  // Retrieving the values of form elements
  var fname = document.contactForm.FName.value;
  var lname = document.contactForm.LName.value;
  var DOB = document.contactForm.DOB.value;
  var weight = document.contactForm.weight.value;
  var team = document.contactForm.team.value;
  var country = document.contactForm.country.value;
  var Position = document.contactForm.Position.value;
  var goals = document.contactForm.goals.value;
  var matches = document.contactForm.matches.value;

  // Defining error variables with a default value
  var FnameErr =
    (LnameErr =
    DOBErr =
    weightErr =
    teamErr =
    countryErr =
    positionErr =
    teamErr =
    goalErr =
      true);

  // Validate name
  if (fname == "") {
    printError("FnameErr", "Please enter First name", "FName");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(fname) === false) {
      printError("FnameErr", "Please enter a valid  First name", "FName");
    } else {
      printError("FnameErr", "", "FName");
      FnameErr = false;
    }
  }
  if (lname == "") {
    printError("LnameErr", "Please enter Last name", "LName");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lname) === false) {
      printError("LnameErr", "Please enter a valid Last name", "LName");
    } else {
      printError("LnameErr", "", "LName");
      LnameErr = false;
    }
  }
  // Validate email address
  if (DOB == "") {
    printError("DOBErr", "Please select DOB", "DOB");
  } else {
    printError("DOBErr", "", "DOB");
    DOBErr = false;
  }

  // Validate mobile number
  if (weight == "") {
    printError("weightErr", "Please enter weight", "weight");
  } else {
    var regex = /^[1-9]/;
    if (regex.test(weight) === false) {
      printError("weightErr", "Please enter a valid weight", "weight");
    } else {
      printError("weightErr", "", "weight");
      weightErr = false;
    }
  }

  // Validate country
  if (country == "Select") {
    printError("countryErr", "Please select a country", "country");
  } else {
    printError("countryErr", "", "country");
    countryErr = false;
  }
  // Validate Team
  if (team == "Select") {
    printError("teamErr", "Please select a Team", "team");
  } else {
    printError("teamErr", "", "team");
    teamErr = false;
  }
  // Validate position
  if (Position == "Select") {
    printError("positionErr", "Please select a Position", "Position");
  } else {
    printError("positionErr", "", "Position");
    positionErr = false;
  }
  if (goals == "") {
    printError("goalErr", "Please enter goals scored", "goals");
  } else {
    printError("goalErr", "", "goals");
    goalErr = false;
  }
  if (matches == "") {
    printError("matchErr", "Please enter matches played", "matches");
  } else {
    var regex = /^[1-9]/;
    if (regex.test(matches) === false) {
      printError("matchErr", "Please enter matches played", "matches");
    } else {
      printError("matchErr", "", "matches");
      matchErr = false;
    }
  }
  if (
    matchErr == false &&
    goalErr == false &&
    FnameErr == false &&
    LnameErr == false &&
    DOBErr == false &&
    weightErr == false &&
    teamErr == false &&
    countryErr == false &&
    positionErr == false
  ) {
    document.getElementById("registeredit-form").submit();
  } else {
    return false;
  }
}

// Search validation in edit player
function searchValidations() {
  document
    .querySelector(".search-button")
    ?.addEventListener("click", function () {
      getInputValue();
    });
}

function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("search").value;
  if (inputVal == "") {
    document.getElementById("search").style.marginBottom = 0;

    document.getElementById("demo1").style.marginBottom = "2rem";
    // Displaying the value
    document.getElementById("demo1").innerHTML = "Please Enter the value";
  } else {
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("search-form").submit();
    // showForm();
  }
}

function myFunction1() {
  let user = document.getElementById("account-name").value;
  if (user == null || user == "") {
    document.getElementById("base-login").style.display = "block";
    document.getElementById("base-logout").style.display = "none";
  } else {
    document.getElementById("base-login").style.display = "none";
    document.getElementById("base-logout").style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".charts")) {
    teamChart();
    playersChart();
    goalsChart();
    myFunction1();
  }
  formValidations();
  searchValidations();
});
