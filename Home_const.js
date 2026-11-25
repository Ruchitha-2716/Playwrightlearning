// Declare a global variable using const
const browserVersion = "Chrome";

// Create a function
function getBrowserVersion() {

    // Check if browser is Chrome
    if (browserVersion === "Chrome") {

        // Declare local variable using const
        const browserVersion = "Edge";

        console.log("Inside if block:", browserVersion);
    }

    // Print browserVersion outside the if block
    console.log("Outside if block:", browserVersion);
}

// Call the function
getBrowserVersion();