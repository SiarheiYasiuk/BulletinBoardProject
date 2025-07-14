import { useFetch } from "./useFetch";

export function useAdDetailsFetch(adId) {
    const {
        error: adError,
        response: adResponse,
    } = useFetch(`ads/${adId}`);

    return { adError, adResponse };
}
