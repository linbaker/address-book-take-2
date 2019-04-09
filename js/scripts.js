// Business Logic for AddressBook ----------------------------------------------

function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts -------------------------------------------------

function Contact(firstName, lastName, phoneNumber, inputtedEmailPersonalAddress, inputtedEmailWorkAddress, physicalAddress) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber,
  this.email =  new EmailAddresses(inputtedEmailPersonalAddress, inputtedEmailWorkAddress);
  this.physicalAddress = physicalAddress
  // this.physicalWorkAddress = physicalWorkAddress
  }

function EmailAddresses(emailPersonalAddress, emailWorkAddress) {
  this.emailPersonalAddress = emailPersonalAddress,
  this.emailWorkAddress = emailWorkAddress
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// User Interface Logic --------------------------------------------------------

var addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

function showContact(contactId) {
  var contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email-personal-address").html(contact.email.emailPersonalAddress);
  $(".email-work-address").html(contact.email.emailWorkAddress);
  $(".physical-address").html(contact.physicalAddress);
  // $(".physical-work-address").html(contact.physicalWorkAddress);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
   addressBook.deleteContact(this.id);
   $("#show-contact").hide();
   displayContactDetails(addressBook);
 });
};

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedEmailPersonalAddress = $("input#new-email-personal-address").val();
    var inputtedEmailWorkAddress = $("input#new-email-work-address").val();
    var inputtedPhysicalAddress = $("input#new-physical-address").val();
    // var inputtedPhysicalWorkAddress = $("input#new-physical-work-address").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-email-personal-address").val("");
    $("input#new-email-work-address").val("");
    $("input#new-physical-address").val("");
    // $("input#new-physical-work-address").val("");

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailPersonalAddress, inputtedEmailWorkAddress, inputtedPhysicalAddress);
    addressBook.addContact(newContact);
    console.log("End ot UI contacts", newContact);
    displayContactDetails(addressBook);
  })
})
