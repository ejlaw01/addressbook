// backend logic
var Contact = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

var Address = function(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}


// frontend logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputFirstName = $("#first-name").val();
    var inputLastName = $("#last-name").val();

    var newContact = new Contact(inputFirstName, inputLastName);

debugger;
    $(".new-address").each(function(){
      var inputStreet = $(this).find("input.street").val();
      var inputCity = $(this).find("input.city").val();
      var inputState = $(this).find("input.state").val();
      var newAddress = new Address(inputStreet, inputCity, inputState);
      newContact.addresses.push(newAddress);
    });

    $("ul").append("<li>" + newContact.fullName() + "</li>");

    $("#first-name").val("");
    $("#last-name").val("");
    $("#street").val("");
    $("#city").val("");
    $("#state").val("");

    $("#output li").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text("");
        newContact.addresses.forEach(function(address){
        $(".address").append("<li>" + address.fullAddress() + "</li>");
      });
    });
  });
  $("#new-address").click(function(){
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="street">Street</label>' +
                                   '<input type="text" class="form-control street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="city">City</label>' +
                                   '<input type="text" class="form-control city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="state">State</label>' +
                                   '<input type="text" class="form-control state">' +
                                 '</div>' +
                               '</div>');
  });
});
