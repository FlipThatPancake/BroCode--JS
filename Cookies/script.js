

// COOKIES


// cookie = small file stored on user's computer
// used to remember information about the user
// ex. login info, preferences, shopping cart items
// cookies have size limit of 4KB
// browsers limit number of cookies per domain (usually around 20)
// cookies are sent with every HTTP request to the server
// avoid storing sensitive information in cookies
// consider using HttpOnly and Secure flags for added security

// set cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

console.log(document.cookie); // output: username=JohnDoe

// set cookie function

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

setCookie("user", "JaneDoe", 7); // cookie expires in 7 days

// expire a cookie

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

console.log(document.cookie); // output: (empty string)

// delete cookie func

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

// or

function deleteCookie2(name) {
    setCookie(name, "", -1); // or setCookie(name, null, null);
}

deleteCookie("user");

// Get cookie

setCookie("test", "testValue", 7);
setCookie("session", "abc123", 7);

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    console.log(cDecoded);
    const cArray = cDecoded.split('; ');
    console.log(cArray);

    cArray.forEach(element => {
        if (element.indexOf(name) === 0) {
            console.log(element.substring(name.length + 1));
            return element.substring(name.length + 1);
        }
    })
}

getCookie("test"); // output: testValue
getCookie("session"); // output: abc123


// Working with HTML

const firstText = document.getElementById("firstText");
const lastText = document.getElementById("lastText");
const submit = document.getElementById("submit");
const getCookies = document.getElementById("getCookies");

submit.addEventListener('click', () => {
    setCookie("firstName", firstText.value, 7);
    setCookie("lastName", lastText.value, 7);
    console.log("Cookies Set");
});

getCookies.addEventListener('click', () => {
    const firstName = getCookie("firstName");
    const lastName = getCookie("lastName");
    console.log(`First Name: ${firstName}\nLast Name: ${lastName}`);
});