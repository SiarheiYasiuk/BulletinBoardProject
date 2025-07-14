import { buildQueryString } from "../utils/utils";
import { useFetch } from "./useFetch";

export function useAdsFetch({
    sort,
    field,
    fromPrice,
    toPrice,
    searchValue,
    limit,
    page,
    category,
}) {

    const {
        isLoading: adsLoading,
        error: adsError,
        response: adsResponse,
    } = useFetch(
        buildQueryString({
            queryField: "ads",
            sort,
            field,
            fromPrice,
            toPrice,
            searchValue,
            limit,
            page,
            category,
        })
    );

    return { adsLoading, adsError, adsResponse };
}
