import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import config from "../json-server.json";
import { updateUserAction } from "../store/actions/userActions";

export function useUserUpdate(id, changedUser, accessToken) {
    const dispatch = useDispatch();
    const [userUpdateError, setUserUpdateError] = useState(null);
    const [isLoading, setLoading] = useState(null);

    useEffect(() => {
        const updateUser = async () => {
            if (id && changedUser && accessToken) {
                try {
                    setLoading(true);
                    await axios.patch(
                        `http://${config.host}:${config.port}/users/${id}`,
                        changedUser,
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                            },
                        }
                    );
                    dispatch(updateUserAction(changedUser));
                } catch (error) {
                    setUserUpdateError(error);
                } finally {
                    setLoading(false);
                }
            }
        };

        updateUser();
    }, [id, changedUser, accessToken, dispatch]);

    return { userUpdateError, isLoading };
}
