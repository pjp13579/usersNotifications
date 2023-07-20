To run this application locally, you have one dependency:<br />
&emsp;- Node.JS

Environment variables:<br />
&emsp;PORT: port on which the application will listen<br />
&emsp;LOG_LEVEL: Morgan middleware logger level, options: ["combined", "common", "dev", "short", "tiny"]<br />
&emsp;NODE_ENV: development or production? Production will not show Swagger-UI Documentation. "prod" for production, anything else will default to development<br />
&emsp;DATABASE_URI: mongo database connection string<br />
&emsp;CONNECTIONSTRING: Azure Web PubSub instance connection string<br />
&emsp;PUBSUBHUB: Azure Web PubSub hub to receive real-time notifications<p></p>
<p></p>

To run the application: <br />
&emsp;-open a terminal window <br />
&emsp;-move to the application root directory <br />
&emsp;-(optional) execute the command "npm run coverage" to generate tsoa routes and run the unit tests<br />
&emsp;-execute the command "npm run build" to generate tsoa routes <br />
&emsp;-execute the command "npm run start" to start the application <p></p>
<p></p>

There is an instance of this application deployed in Azure. These are the web-api endpoints:<br />
&emsp;-<a href="https://usernotification23771.azurewebsites.net/notification/accesstoken">https://usernotification23771.azurewebsites.net/notification/accesstoken</a> (Post)<br />
&emsp;-<a href="https://usernotification23771.azurewebsites.net/notification/user">https://usernotification23771.azurewebsites.net/notification/user</a> (Post)<br />
&emsp;-<a href="https://usernotification23771.azurewebsites.net/notification/all">https://usernotification23771.azurewebsites.net/notification/all</a> (Post)<br />
&emsp;-<a href="https://usernotification23771.azurewebsites.net/user/getallusers">https://usernotification23771.azurewebsites.net/user/getallusers</a> (Get)<br />
&emsp;-<a href="https://usernotification23771.azurewebsites.net/user/getuserbyid/{id}">https://usernotification23771.azurewebsites.net/user/getuserbyid/{id}</a> (Get)<br />
&emsp;-<a href="https://usernotification23771.azurewebsites.net/user">https://usernotification23771.azurewebsites.net/user</a> (Post)<br />
&emsp;-<a href="https://usernotification23771.azurewebsites.net/user">https://usernotification23771.azurewebsites.net/user</a> (Delete)<p></p>
<p></p>

Swagger-UI:
<a href="https://usernotification23771.azurewebsites.net/docs">https://usernotification23771.azurewebsites.net/docs</a><p></p>
	<p></p>

To connect a WebSocket to the backend, use the JS script in the file './subPubSubWebsocketScript.js'. <br />
To get an access token, use the endpoint '../notification/accesstoken'.