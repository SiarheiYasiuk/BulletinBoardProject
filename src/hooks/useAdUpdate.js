import { useEffect, useState } from "react";
import axios from "axios";

import config from "../json-server.json";

export function useAdUpdate(id, changedAd, accessToken) {
    const [response, setResponse] = useState(null);
    const [adUpdateError, setAdUpdateError] = useState(null);

    useEffect(() => {
        const haveAllData = id && changedAd && accessToken;

        if (!haveAllData) {
            return;
        }

        const updateAd = async () => {
            try {
                const response = await axios.patch(
                    `http://${config.host}:${config.port}/ads/${id}`,
                    changedAd,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                setResponse(response);
            } catch (error) {
                setAdUpdateError(error);
            }
        };

        updateAd();
    }, [id, changedAd, accessToken]);

    return { adUpdateError, response };
}
