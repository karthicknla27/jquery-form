$(document).ready(function () {
    $("#email-error").hide();
    $("#password-error").hide();
    $("#eye").click(function () {
      if ($("#eye").hasClass("fas fa-eye-slash")) {
        $("#eye").removeClass("fas fa-eye-slash");
        $("#eye").addClass("fas fa-eye");
        $("#passwordid").attr("type", "text");
      } else {
        $("#eye").removeClass("fas fa-eye");
        $("#eye").addClass("fas fa-eye-slash");
        $("#passwordid").attr("type", "password");
      }
    });
  
    function validate() {
      let email = $("#emailid").val();
      let password = $("#passwordid").val();
      let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      let passwordRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!.@$%^&*-]).{8,}$/;
      let emailResult = emailRegex.test(email);
      let passwordResult = passwordRegex.test(password);
      if (!emailResult) {
        $("#email-error").show();
        $("#password-error").hide();
        return;
      }
      if (!passwordResult) {
        $("#password-error").show();
        $("#email-error").hide();
        return;
      } else {
        const email = $("#emailid").val();
        const password = $("#passwordid").val();
        const item = {
          email: email,
          password: password,
        };
        console.log(item);
  
        $("#formid")[0].reset();
        $("#email-error").hide();
        $("#password-error").hide();
      }
    }
    $("#submitbtn").click(function (e) {
      e.preventDefault();
      validate();
    });
  });