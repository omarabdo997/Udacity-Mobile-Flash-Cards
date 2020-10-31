import {AsyncStorage} from 'react-native'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions' 

function createNotification() {
    return {
      title: 'Do a Quiz!',
      body: "Don't forget to do a quiz today!",
      android: {
        sticky: false,
        priority: 'high',
        sound: true,
        vibrate: true,
      }
    }
}

export function setNotification() {
    AsyncStorage.getItem('notification')
    .then(JSON.parse)
    .then((data) => {
    if(!data) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({status}) => {
            if(status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()
            let tommorrow = new Date()
            tommorrow.setDate(tommorrow.getDate()+1)
            tommorrow.setHours(18)
            tommorrow.setMinutes(0)
            tommorrow.setSeconds(0)
            Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger: tommorrow
            })
            AsyncStorage.setItem('notification', JSON.stringify(true))
            }
        })
    }
    })
            
}

export function clearNotification() {
    return AsyncStorage.removeItem('notification')
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function getDecks() {
    return AsyncStorage.getItem('decks')
    .then((decks) => {
        return JSON.parse(decks)
    })
} 