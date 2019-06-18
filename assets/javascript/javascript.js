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
    var firstTrain = moment($("#firstTrain-input").val().trim(), "00:00").format("hh:mm");
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
      console.log(newTrain.firstTrain);
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
        var trainName = childSnapshot.val().name;
        var destination = childSnapshot.val().destination;
        var firstTrain = childSnapshot.val().firstTrain;
        var frequency = childSnapshot.val().frequency;
      
        // train Info
        console.log(trainName);
        console.log(destination);
        console.log(firstTrain);
        console.log(frequency);
      
     //========================================
     var firstTime = moment($("#firstTrain-input").val().trim(), "00:00").format("hh:mm");
     var tFrequency = $("#frequency-input").val().trim();
      // First Time (pushed back 1 year to make sure it comes before current time)
      var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "days");
      console.log(firstTimeConverted);
  
      // Current Time
      var currentTime = moment();
      console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
  
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
      console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
        
     //================================================ 
    
        // Create the new row
        var newRow = $("<tr>").append(
          $("<td>").text(trainName),
          $("<td>").text(destination),
          $("<td>").text(frequency),
          $("<td>").text(nextTrain),
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

