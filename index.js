    var FCM = require('fcm-node');
    var serverKey = 'AAAA3JJra8w:APA91bF5UCJM9EusPRr0vqRBkx1RcPoxqiYEHBQLWhCa0kdBP64DS2atWtLcaBWwjC0lN5x5Uru-bfmex84Bm0zYXtl6YWETdFb9Ux-rpIBq-720nStMKTxOdHTdHZXG5-Rged7_L2Tw '; // put your server key here
    var fcm = new FCM(serverKey);
    var admin = require('firebase-admin')
 
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: 'fFa411ZLiZJ6pLCO6fcFBC:APA91bEWzwhGhhKGxJX3ZpydAGlUoQwUrTHTeyohtnZEl5pAFTUttxS8OZlvNPGQSypNQmqGZhVGh9iAvC9BB5chN6TRpUyLFwBFuVE4hHJcBnMofUfU1CtOKXV-un9Sl76-XsJPnV0t', 
        collapse_key: 'APA91bHwJnHVZ4xYetIRVY3WHiijyEmUSBNK7i2kXXvhMlW0l9RUDfsQG8b00VrG4yV9qYsMivtuaIkbQaT5SkZKEkNLI8e3HGlcxt8',
        
        notification: {
            // title: 'Title of your push notification', 
            // body: 'Body of your push notification',
            date: admin.firestore.Timestamp.now().toDate() 
        },
        
        data: {  //you can send only notification or only data(or include both)
            title: 'Title of your push notification', 
            body: 'Body of your push notification',
        }
    };
    
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });