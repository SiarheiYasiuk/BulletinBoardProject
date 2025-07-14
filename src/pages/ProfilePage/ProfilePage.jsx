import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProfileForm from "./components/ProfileForm/ProfileForm";
import CategoryName from "../../components/CategoryName/CategoryName";
import { useUserUpdate } from "../../hooks/useUserUpdate";
import { setDefaultValuesAction } from "../../store/actions/adsActions";
import { getUser } from "../../store/selectors/userSelectors";
import { getAccessToken } from "../../store/selectors/authSelectors";

const ProfilePage = () => {
    const [userId, setUserId] = useState(null);
    const [changedUser, setChangedUser] = useState(null);
    const dispatch = useDispatch();

    const user = useSelector(getUser);

    const accessToken = useSelector(getAccessToken);

    const { userUpdateError, isLoading } = useUserUpdate(
        userId,
        changedUser,
        accessToken
    );

    const onSubmit = ({ phoneNumber, name, city }) => {
        setUserId(user.id);
        setChangedUser({
            phoneNumber: phoneNumber,
            name: name,
            city: city,
        });
    };

    useEffect(() => {
        dispatch(setDefaultValuesAction());
    }, [dispatch]);

    return (
        <div>
            <CategoryName name={"Данные профиля"} />
            <ProfileForm
                onSubmit={onSubmit}
                user={user}
                userUpdateError={userUpdateError}
                isLoading={isLoading}
            />
        </div>
    );
};

export default ProfilePage;
