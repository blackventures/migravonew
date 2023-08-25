// Importing necessary Firebase functionalities
import { initializeApp } from "firebase/app";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

// Firebase initialization (use your config)
const firebaseConfig = {
    apiKey: "AIzaSyC9o_nKxr4ijASNiA0EK7g1zftRe0Pn23E",
    authDomain: "migravo.firebaseapp.com",
    projectId: "migravo",
    storageBucket: "migravo.appspot.com",
    messagingSenderId: "250437340704",
    appId: "1:250437340704:web:845bab5905489c18073645",
    measurementId: "G-KK4DF5RQY1"
  };

initializeApp(firebaseConfig);

const auth = getAuth();
sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

// Configuration for email link authentication
const actionCodeSettings = {
    url: 'https://migravo.ca/emailSignInRedirect.html',
    handleCodeInApp: true,
};


// Function to send authentication email
function sendSignInEmail(userEmail) {
    sendSignInLinkToEmail(auth, userEmail, actionCodeSettings)
        .then(() => {
            window.localStorage.setItem('emailForSignIn', userEmail);
            alert("Email sent successfully! Check your inbox.");
        })
        .catch((error) => {
            console.error("Error sending email:", error.message);
            alert("Error sending email. Please try again later.");
        });
}

// Function to handle email link sign-in
function handleEmailLinkSignIn() {
    if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        
        if (!email) {
            email = window.prompt('Please provide your email for confirmation');
        }

        signInWithEmailLink(auth, email, window.location.href)
            .then((result) => {
                window.localStorage.removeItem('emailForSignIn');
                alert("Signed in successfully!");
            })
            .catch((error) => {
                console.error("Error signing in:", error.message);
                alert("Error signing in. Please try again.");
            });
    }
}

// Call the function to handle email link sign-in when the script loads
handleEmailLinkSignIn();
