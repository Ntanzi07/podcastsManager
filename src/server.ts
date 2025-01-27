import * as http from "http";

const server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {}
);

server.listen(process.env.PORT, () => {
    console.log("Servidor iniciado na porta" + process.env.PORT);
});