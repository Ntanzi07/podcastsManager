import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from '../services/List_Episodes_Service'

export const getListEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => {

    const content = await serviceListEpisodes()
    res.writeHead(200, {'content-type': "application/json"});
    res.end(
        JSON.stringify(content)
    );
};