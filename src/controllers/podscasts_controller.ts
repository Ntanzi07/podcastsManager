import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from '../services/list_episodes_service'
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { statusCode } from "../utils/status-code";
import { contentType } from "../utils/content-type";
import { FilterPodcastModel } from "../models/filter-podcast-models";

export const getListEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => {
    const content: FilterPodcastModel = await serviceListEpisodes()
    res.writeHead(content.statusCode, {'content-type': contentType.JSON});
    res.write(JSON.stringify(content.body))
    res.end()
};

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => {

    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);
    res.writeHead(content.statusCode, {'content-type': contentType.JSON});
    res.write(JSON.stringify(content.body))
    res.end()
};