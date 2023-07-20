
// assign "clientAccessToken" the websocket access token
let clientAccessToken = "";

const WEBSOCKET_SUBPROTOCOL = "json.webpubsub.azure.v1";

//connect to the web-socket
let wsMicroService = new WebSocket(clientAccessToken, WEBSOCKET_SUBPROTOCOL);

// when a connection is successfully established, the following code will be executed
wsMicroService.onopen = () => {
	console.log(wsMicroService);
};
// when a message is received, the following code will be executed
wsMicroService.onmessage = (event) => {
	console.log(JSON.parse(event.data).data);
};