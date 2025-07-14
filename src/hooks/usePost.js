import { useEffect, useState } from "react";
import axios from "axios";

import config from "../json-server.json";

export function usePost(query, data) {
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (query && data) {
                try {
                    const response = await axios.post(
                        `http://${config.host}:${config.port}/${query}`,
                        data
                    );

                    setResponseData(response.data);
                } catch (error) {
                    setError(error);
                }
            }
        };

        fetchData();
    }, [query, data]);

    return { error, responseData };
}
