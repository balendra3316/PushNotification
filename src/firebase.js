import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyA5TfI3irjtDbwtGiyfjkJGKFwKwEytDuk",
    authDomain: "pwatask-cc3dc.firebaseapp.com",
    projectId: "pwatask-cc3dc",
    storageBucket: "pwatask-cc3dc.firebasestorage.app",
    messagingSenderId: "170472221594",
    appId: "1:170472221594:web:9a999f7b28a968a2b3e823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestPermission = async () => {
    try {
        // Check Notification permission status
        const status = await Notification.requestPermission();
        if (status === "granted") {
            console.log("Notification permission granted.");
            
            // Generate FCM Token
            const token = await getToken(messaging, {
                vapidKey: "BBWJj9GHOY-nwcy0J98bgt9RMUqweYcqghrhozebrQXz3QJKpKJSZI6KORWHd78vFyBsozksT4OvmXp2x9R-GNY",
            });
            
            if (token) {
                console.log("FCM Token:", token);
                alert("Notification permission granted. Check the console for FCM token.");
            } else {
                console.error("No registration token available.");
            }
        } else {
            console.warn("Notification permission denied.");
            alert("Notification permission is required to receive push notifications.");
        }
    } catch (error) {
        console.error("Error getting FCM token:", error);
    }
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("Message received:", payload);
            resolve(payload);
        });
    });




   