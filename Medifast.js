// Created in App Lab

var fullname;
var address;
var phoneNum;
var queueList;
var hospitalName;
var paymentOption;
var medRecord = [];
var diagnosis = [];

onEvent("signUp", "click", function( ) {
  fullname = getText("fullnameInput");
  address = getText("addressInput");
  phoneNum = getText("phoneNumInput");
  setScreen("homePage");
});

onEvent("queue", "click", function( ) {
  appendItem(queueList, "fullName");
  setText("notifications", "You Have Successfully Made an Appointment");
});

onEvent("callBtn", "click", function( ) {
  // Call the hospital
});

onEvent("payment", "click", function( ) {
  paymentOption = getText("paymentOptionSelect");
  if (paymentOption == "creditCard") {
    setScreen("creditCardScreen");
  }
  if (paymentOption == "insurance") {
    setScreen("insuranceScreen");
  }
  if (paymentOption == "cash") {
    setScreen("cashScreen");
  }
});

onEvent("medicalRecord", "click", function( ) {
  setText("diagnosisOutput", diagnosis[medRecord]);
  setText("recommendationsOutput", recommendations[medRecord]);
  setText("dayOutput", day[medRecord]);
});

onEvent("backBtn", "click", function( ) {
  setScreen("homePage");
});