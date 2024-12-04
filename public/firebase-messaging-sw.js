


importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js');

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5TfI3irjtDbwtGiyfjkJGKFwKwEytDuk",
    authDomain: "pwatask-cc3dc.firebaseapp.com",
    projectId: "pwatask-cc3dc",
    storageBucket: "pwatask-cc3dc.appspot.com",
    messagingSenderId: "170472221594",
    appId: "1:170472221594:web:9a999f7b28a968a2b3e823"
};


firebase.initializeApp(firebaseConfig);



const messaging = firebase.messaging();
console.log("Hiii 1")
messaging.onBackgroundMessage((payload) => {
    console.log("Hiii 2")
    console.log('Received background message: ', payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon,
    })
})

messaging.onMessage((payload) => {
    console.log('Foreground message received: ', payload);

    // Display notification manually
    if (Notification.permission === "granted") {
        new Notification(payload.notification.title, {
            body: payload.notification.body,
            icon: payload.notification.icon
        });
    }
});
