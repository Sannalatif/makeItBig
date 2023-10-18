const formBtn = document.getElementById("saveForm");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");

formBtn.addEventListener("click" , function() {
   fName.value = fName.value.toUpperCase();
   lName.value = lName.value.toUpperCase();
});

