import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

export default class Notifier {
    constructor() {
        this.configure();
    }

    configure() {
        PushNotification.configure({
            onNotification: notification => {
                console.log(notification);
                // iOS only
                notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            requestPermissions: true,
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },
        });
    }

    static localNotifAtDate(title, message, date) {
        PushNotification.localNotificationSchedule({
            title: title,
            message: message,
            date: date
        });
    }

    static expirNotifAtDate(date) {
        PushNotification.localNotificationSchedule({
            title: "Items expiring",
            message: "Hey, you have item(s) that will be expiring or have expired within the next two days",
            date: date
        });
    }

    static cancelAllNotifs() {
        PushNotification.cancelAllLocalNotifications();
    }
}



