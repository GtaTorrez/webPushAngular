
import * as express from 'express';

import {Application} from "express";
import {readAllLessons} from "./read-all-lessons.route";
import {addPushSubscriber} from "./add-push-subscriber.route";
import {sendNewsletter} from "./send-newsletter.route";
const bodyParser = require('body-parser');
var cors = require('cors')
const webpush = require('web-push');
var fs = require('fs');
var https = require('https');

const vapidKeys = {
    "publicKey":"BLnVk1MBGFBW4UxL44fuoM2xxQ4o9CuxocVzKn9UVmnXZEyPCTEFjI4sALMB8qN5ee67yZ6MeQWjd5iyS8lINAg",
    "privateKey":"mp5xYHWtRTyCA63nZMvmJ_qmYO6A1klSotcoppSx-MI"
};


webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);




const app: Application = express();


app.use(bodyParser.json());
app.use(cors())

app.use(express.static('./dist'));
// REST API
app.route('/api/lessons')
    .get(readAllLessons);

app.route('/api/notifications')
    .post(addPushSubscriber);

app.route('/api/newsletter')
    .post(sendNewsletter);



//launch an HTTP Server
const httpServer = app.listen(49500, () => {
    console.log("HTTP Server running at http://localhost:" + httpServer.address().port);
});
/*
const PORT = 443;
    
 
https.createServer({
    key: fs.readFileSync('cert/cert.key'),
    cert: fs.readFileSync('cert/cert.crt')
}, app).listen(PORT, function(){
    console.log("My https server listening on port " + PORT + "...");
});
 */






