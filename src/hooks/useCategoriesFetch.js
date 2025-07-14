import { useFetch } from "./useFetch";
import { buildQueryString } from "../utils/utils";

export function useCategoriesFetch() {
    const {
        isLoading: categoriesLoading,
        error: categoriesError,
        response: categoriesResponse,
    } = useFetch(buildQueryString({ queryField: "categories" }));

    return { categoriesLoading, categoriesError, categoriesResponse };
}
