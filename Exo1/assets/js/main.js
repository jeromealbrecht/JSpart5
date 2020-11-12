function validate() {

  let a = document.getElementById("pass1");
  let b = document.getElementById("pass2");

  if (a.value != b.value) {
      alert("Les mots de passe ne correspondent pas.");
      a.style.borderColor = "red";
      b.style.borderColor = "red";
      return false;
  } else {
      alert("Les mots de passe correspondent.");
      a.style.borderColor = "green";
      b.style.borderColor = "green";
      return true;
  }
}