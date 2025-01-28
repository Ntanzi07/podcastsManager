import { FilterPodcastModel } from "../models/filter-podcast-models";
import { repoPodcast } from "../repositories/podcasts-repository"
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<FilterPodcastModel> => {

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repoPodcast(queryString);

    const resposeFormat: FilterPodcastModel = {
        statusCode: data.length !== 0 ? statusCode.OK : statusCode.NOT_FOUND,
        body: data
    };

    return resposeFormat;
}