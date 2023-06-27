function f1() {
  console.log("button clicked");
  let name = document.querySelector("#name").value;
  let password = document.querySelector("#password").value;
  let email = document.querySelector("#email").value;
  const gender = Array.from(document.getElementsByName("gender"));
  // let female = document.querySelector("#female").Checked;
  // let custom = document.querySelector("#costum").Checked;

  if (!name) {
    alert("please fill the name");
    document.querySelector("#errname").innerText = "please fill the name";
    document.querySelector("#name").focus();
    // document.querySelector("#name").style.cssText =
    //   "border:3px solid red,outline:none";
    document.querySelector("#name").classList.add("a");
    return false;
  }
  if (!password) {
    alert("please fill the password");
    document.querySelector("#errpassword").innerText = "please fill password";
    document.querySelector("#password").focus();
    document.querySelector("#password").classList.add("a");
    return false;
  }
  if (!email) {
    alert("please fill the password");
    document.querySelector("#errpassword").innerText = "please fill password";
    document.querySelector("#email").focus();
    document.querySelector("#email").classList.add("a");
    return false;
  }

  // // console.log(gender);
  a = gender.map((e) => e.value);
  let male = document.querySelector("#male").checked;
  let female = document.querySelector("#female").checked;
  let custom = document.querySelector("#custom").checked;

  console.log(male);
  if (male == !a && female == !a && custom == !a) {
    alert("please choose male or female ");
    document.querySelector("#errgender").innerText =
      "please choose male or female";
    // document.querySelector("#gender").focus();
    return false;
  }
  const x = document.querySelector("#date");

  if (x.selectedIndex == "") {
    alert("Please select date-of-birth!");
    x.focus();
    document.querySelector("#errdate").innerHTML = "please select date";
    return false;
  }
  var selectedText = x.options[x.selectedIndex].text;
  alert("You have selected : " + selectedText);
  console.log(selectedText);
  return true;
}
document.addEventListener("submit", function f1(e) {
  e.preventDefault();
  console.log("clicke button");
});
