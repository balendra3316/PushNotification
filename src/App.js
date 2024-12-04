import React, { useEffect } from 'react';
import { requestPermission, onMessageListener } from './firebase';

function App() {
    useEffect(() => {
        // Listen for incoming messages
        onMessageListener()
            .then((payload) => {
                console.log('Notification received:', payload);
                alert(`Notification: ${payload.notification.title}`);
            })
            .catch((err) => console.error('Error listening for messages:', err));
    }, []);

    const handleEnableNotifications = () => {
        requestPermission();
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>React PWA with Push Notifications</h1>
            <button onClick={handleEnableNotifications} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Enable Notifications
            </button>
        </div>
    );
}

export default App;
