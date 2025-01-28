import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podscasts_controller"; 


const port = process.env.PORT;

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        
        const baseUrl = req.url?.split("?")[0];

        if(req.method === "GET" && baseUrl === "/api/list"){
           await getListEpisodes(req, res);
        }
        if(req.method === "GET" && baseUrl === "/api/episode"){
            await getFilterEpisodes(req, res);
        }
    }
);

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});