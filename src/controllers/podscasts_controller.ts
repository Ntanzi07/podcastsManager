import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from '../services/list_episodes_service'
import { serviceFilterEpisodes } from "../services/filter-episodes-service";

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

export const getFilterEpsodes = (
    req: IncomingMessage,
    res: ServerResponse
) => {
    const content = await serviceFilterEpisodes('flow');
    res.writeHead(200, {'content-type': "application/json"});
    res.end(
        JSON.stringify(content)
    )
}