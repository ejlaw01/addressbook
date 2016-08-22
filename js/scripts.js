// backend logic
var Contact = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}



// frontend logic
$("form").submit(function(event){
  event.preventDefault();
  var inputFirstName = $("#first-name").val();
  var inputLastName = $("#last-name").val();

  var newContact = new Contact(inputFirstName, inputLastName);

  $("ul").append("<li>" + inputFirstName + "</li>");

  $("#first-name").val("");
  $("#last-name").val("");

  $("#output li").last().click(function(){
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.fullName());
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
  });

});
