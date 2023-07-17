
// assign "clientMicroService" the web-socket access token 
let clientMicroService = "";

const WEBSOCKET_SUBPROTOCOL = "json.webpubsub.azure.v1";

//connect to the web-socket
let wsMicroService = new WebSocket(clientMicroService, WEBSOCKET_SUBPROTOCOL);

wsMicroService.onopen = () => {
	console.log(wsMicroService);
};
wsMicroService.onmessage = (event) => {
	console.log(JSON.parse(event.data).data);
};