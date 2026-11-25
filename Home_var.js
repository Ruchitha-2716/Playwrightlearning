// Declare a global variable using const
const browserVersion = "Chrome";

// Create a function
function getBrowserVersion() {

    // Check if browser is Chrome
    if (browserVersion === "Chrome") {

        // Declare local variable using var
        var browserVersion = "Edge";

    }

    // Print browserVersion outside the if block
    console.log("Browser Version:", browserVersion);
}

// Call the function
getBrowserVersion();