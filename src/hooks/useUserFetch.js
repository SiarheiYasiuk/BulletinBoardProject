import { useEffect, useState } from "react";
import axios from "axios";

import config from "../json-server.json";

export function useUserFetch({ userId, accessToken }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (userId && accessToken) {
                try {
                    const response = await axios.get(
                        `http://${config.host}:${config.port}/users/${userId}`,
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                            },
                        }
                    );
                    setUser(response.data);
                } catch (error) {
                    setError(error);
                }
            }
        };

        fetchUser();
    }, [userId, accessToken]);

    return { error, user };
}
