import * as http from "http";
import { getListEpisodes } from "./controllers/podscasts_controller"; 


const port = process.env.PORT;

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        if(req.method === "GET"){
           await getListEpisodes(req, res);
        }
    }
);

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});