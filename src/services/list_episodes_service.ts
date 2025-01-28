import { FilterPodcastModel } from "../models/filter-podcast-models";
import { repoPodcast } from "../repositories/podcasts-repository";
import { statusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {
    const data = await repoPodcast();
    
    const resposeFormat: FilterPodcastModel = {
        statusCode: data.length !== 0 ? statusCode.OK : statusCode.NOT_FOUND,
        body: data
    };

    return resposeFormat;
};