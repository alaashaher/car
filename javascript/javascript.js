function myFunction() {
        var email;

        email = document.getElementById("textEmail").value;

            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (reg.test(textEmail.value) == false) {
              alert("invalid email");
              return false;
            } 
       return true;
}

function clearContents(element) {
  element.value = '';
}