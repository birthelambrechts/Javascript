function submitForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var userName = document.getElementById("userName").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var zip = document.getElementById("zip").value;
  var email = document.getElementById("email").value;
  var birthday = document.getElementById("birthday").value;

  event.preventDefault();

  if (userName.length > 10) {
    document.getElementById('errorUser').innerHTML = "The username may have no more than 10 characters"
    document.getElementById("userName").focus();
    console.log("username to long")
    return false;
  }
  if (confirm !== password) {
    document.getElementById('errorPassword').innerHTML = "Please make sure your passwords match"
    console.log("password error")
    return false;
  }
  console.log("yay", firstName, lastName, userName, password, confirm, address, city, zip, email, birthday)


  location.href = "didit.html";

}