// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or
// deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting
// see https://firebase.google.com/docs/web/setup

importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDDS2TacfPH8semqXqoRWUi6WskuTUSTnY",
  authDomain: "gugu-app-282710.firebaseapp.com",
  databaseURL: "https://gugu-app-282710.firebaseio.com",
  projectId: "gugu-app-282710",
  storageBucket: "gugu-app-282710.appspot.com",
  messagingSenderId: "895029396519",
  appId: "1:895029396519:web:28643fd1dccd999fa97a02",
  measurementId: "G-48GVS9XGYW"
});

const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
// Background Message Handler
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  var notification = payload.notification;
  var notificationTitle = notification.title;
  var notificationOptions = {
    body: notification.body,
    icon: "/static/guguLogo.png"
  };

  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(notify);
      }
    })
    .then(() => {
      return self.registration.showNotification(
        notificationTitle,
        notificationOptions
      );
    });
  return promiseChain;
});
