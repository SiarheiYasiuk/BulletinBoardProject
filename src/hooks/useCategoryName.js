import { useState, useEffect } from "react";

import { buildQueryString } from "../utils/utils";
import { useFetch } from "./useFetch";

export function useCategoryName(category) {
    const [name, setCategoryName] = useState(null);
    const [parseError, setParseError] = useState(null);

    const { isLoading, error, response } = useFetch(
        buildQueryString({
            queryField: "categories",
            category,
        })
    );

    useEffect(() => {
        if (response !== null && response.data[0]) {
            setCategoryName(response.data[0].name);
            setParseError(null);
        } else {
            setParseError(new Error("Ошибка при разборе ответа"));
        }
    }, [response]);

    return {
        categoryNameLoading: isLoading,
        categoryNameError: error || parseError,
        name,
    };
}
