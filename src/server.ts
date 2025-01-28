import * as http from "http";
import { getFilterEpsodes, getListEpisodes } from "./controllers/podscasts_controller"; 


const port = process.env.PORT;

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        
        if(req.method === "GET" && req.url === "/api/list"){
           await getListEpisodes(req, res);
        }
        if(req.method === "GET" && req.url === "/api/episode"){
            await getFilterEpsodes(req, res);
        }
    }
);

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});