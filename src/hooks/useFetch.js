import { useEffect, useState } from "react";
import axios from "axios";

import config from "../json-server.json";

export function useFetch(query) {
    const [response, setResponse] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (query) {
                try {
                    setLoading(true);
                    const response = await axios.get(
                        `http://${config.host}:${config.port}/${query}`
                    );
                    setResponse(response);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [query])

    return { isLoading, error, response };
}
