let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if(userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("access level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrador";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log('User Category: ', userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Auntenthicated" : "Not autenthicated";

console.log("Aunthentication Status: ", authenticationStatus);

let typeOfUser = "Subscriber";
let servicesAccess = [];

switch(typeOfUser) {
    case "Employee":
        servicesAccess = ["Dietary Services", "Food Discounts", "Ace Points"];
        break;
    case "Enrolled Member":
        servicesAccess = ["Dietary Services", "Food Market Gift Card", "One-on-one interaction with a dietician", "Personalized App"];
        break;
    case "Subscriber":
        servicesAccess = ["Dietary Services", "Food Market Gift Card"];
        break;
    case "Non-Subscriber":
         servicesAccess = "You need to subscribe to avail this facility";
        break;
    default:
        servicesAccess = "Please create sign up to get started";
}   

console.log("You have access to: " + servicesAccess.map(item => {
    return ' ' + item;
}));