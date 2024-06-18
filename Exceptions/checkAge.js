function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be at least 18 years old");
    }
    return "Access Granted";
}

try {
    console.log(checkAge(27))

} catch (error) {
    console.error("Caught an exception", error.message);

}