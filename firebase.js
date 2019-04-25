var app_firebase = {};

(function () {
    
        
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyC4YsC1k9zbrcfaIdnFYNjXuyHldc3rxtk",
            authDomain: "graphic-era-storage-service.firebaseapp.com",
            databaseURL: "https://graphic-era-storage-service.firebaseio.com",
            projectId: "graphic-era-storage-service",
            storageBucket: "graphic-era-storage-service.appspot.com",
            messagingSenderId: "47973920766"
          };
          firebase.initializeApp(config);

          app_firebase = firebase;

})()