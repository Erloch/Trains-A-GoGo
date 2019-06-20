var firebaseConfig = {
  apiKey: "AIzaSyCpdHwnc7uJ6Yrm0tRnRnFWkDKcBXXhwYs",
  authDomain: "bootcamp-5cfa8.firebaseapp.com",
  databaseURL: "https://bootcamp-5cfa8.firebaseio.com",
  projectId: "bootcamp-5cfa8",
  storageBucket: "bootcamp-5cfa8.appspot.com",
  messagingSenderId: "963095541257",
  appId: "1:963095541257:web:aa9bd8ba82ac0d7b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrain = $("#firstTrain-input").val().trim();
    console.log(firstTrain)
    var frequency = $("#frequency-input").val().trim();

    var newTrain = {
        name: trainName,
        destination: destination,
        firstTrainTime: firstTrain,
        frequency: frequency
      };
      database.ref().push(newTrain);

      // Logs everything to console
      console.log(newTrain.name);
      console.log(newTrain.destination);
      console.log(newTrain.firstTrainTime);
      console.log(newTrain.frequency);
    
      alert("Train successfully added");
    
   
    
   // Clears all of the text-boxes
      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#firstTrain-input").val("");
      $("#frequency-input").val("");
    });
    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());
      
        // Store everything into a variable.
        var tName = childSnapshot.val().name;
        var tDestination = childSnapshot.val().destination;
        var tFirstTrain = childSnapshot.val().firstTrainTime;
        var tFrequency = childSnapshot.val().frequency;
      
        // train Info
        console.log(tName);
        console.log(tDestination);
        console.log(tFirstTrain);
        console.log(tFrequency);
      
     //========================================
  //    var formatFirstTime = moment(tFirstTrain).format("HH:mm");
  // console.log(formatFirstTime)
      // First Time (pushed back 1 year to make sure it comes before current time)
      var firstTimeConverted = moment(tFirstTrain, "HH:mm").subtract(1, "days");
      console.log(firstTimeConverted);
  
      // Current Time
      var currentTime = moment();
      console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));
  
      // Difference between the times
      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      console.log("DIFFERENCE IN TIME: " + diffTime);
  
      // Time apart (remainder)
      var tRemainder = diffTime % tFrequency;
      console.log(tRemainder);
  
      // Minute Until Train
      var tMinutesTillTrain = tFrequency - tRemainder;
      console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
  
      // Next Train
      var nextTrain = moment().add(tMinutesTillTrain, "minutes");
      console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));
        
     //================================================ 
    
        // Create the new row
        var newRow = $("<tr>").append(
          $("<td>").text(tName),
          $("<td>").text(tDestination),
          $("<td>").text(tFrequency),
          $("<td>").text(moment(nextTrain).format("HH:mm")),
          $("<td>").text(tMinutesTillTrain)
        );
      
        // Append the new row to the table
        $("#train-table > tbody").append(newRow);
      });
    //   var tFrequency = $("#frequency-input").val().trim();

    // // Time is 3:30 AM
    // var firstTime = moment($("#firstTrain-input").val().trim(), "00:00").format("hh:mm");

    // // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "days");
    // console.log(firstTimeConverted);

    // // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);

    // // Time apart (remainder)
    // var tRemainder = diffTime % tFrequency;
    // console.log(tRemainder);

    // // Minute Until Train
    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

