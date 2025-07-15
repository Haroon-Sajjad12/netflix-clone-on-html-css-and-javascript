document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const issue = document.getElementById('issue').value.trim();
    if (issue) {
        alert("Thanks! We'll help you with your: " + issue);
    } else {
        alert("Please describe your issue.");
    }
});
