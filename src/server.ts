import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podscasts_controller"; 
import { Routes } from "./routes/routes";
import { httpMethod } from "./utils/http-methods";

const port = process.env.PORT;

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        
        const baseUrl = req.url?.split("?")[0];

        if(req.method === httpMethod.GET && baseUrl === Routes.LIST){
           await getListEpisodes(req, res);
        }
        if(req.method === httpMethod.GET && baseUrl === Routes.EPISODE){
            await getFilterEpisodes(req, res);
        }
    }
);

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});