import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CategoryName from "./../../components/CategoryName/CategoryName";
import AdSubmissionForm from "./components/AdSubmissionForm";
import { useCategoriesFetch } from "../../hooks/useCategoriesFetch";
import { usePost } from "../../hooks/usePost";
import { useAdUpdate } from "../../hooks/useAdUpdate";
import { setDefaultValuesAction } from "../../store/actions/adsActions";
import { getAccessToken } from "../../store/selectors/authSelectors";
import { getUser } from "../../store/selectors/userSelectors";
import { getCurrentAd } from "./../../store/selectors/adsSelectors";
import { URLs } from "./../../constants/constants";

const AdSubmissionPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [adId, setAdId] = useState(null);
    const [changedAd, setChangedAd] = useState(null);

    const [categoriesOptions, setCategoriesOptions] = useState(null);

    const [addedData, setAddedData] = useState({
        query: "",
        data: null,
    });

    const user = useSelector(getUser);

    const accessToken = useSelector(getAccessToken);
    
    const currentAd = useSelector(getCurrentAd);

    const { adUpdateError, response: responseUpdateAd } = useAdUpdate(
        adId,
        changedAd,
        accessToken
    );

    const { categoriesError, categoriesResponse } = useCategoriesFetch();

    const { error, responseData } = usePost(addedData.query, addedData.data);

    const onSubmit = ({
        ownerName,
        ownerPhoneNumber,
        place,
        adCategory,
        adName,
        adPrice,
        adDescription,
    }) => {
        const data = {
            name: adName,
            price: +adPrice,
            place,
            category: adCategory.value,
            date: new Date(),
            description: adDescription,
            ownerId: user.id,
            ownerName,
            ownerPhoneNumber,
        };

        if (currentAd) {
            setAdId(currentAd.id);
            setChangedAd(data);
        } else {
            setAddedData({
                query: "ads",
                data,
            });
        }
    };

    useEffect(() => {
        if (responseData !== null || responseUpdateAd !== null) {
            navigate(URLs.ads);
        }
    }, [responseData, responseUpdateAd, navigate]);

    useEffect(() => {
        if (categoriesResponse !== null) {
            setCategoriesOptions(
                categoriesResponse.data.map((option) => ({
                    value: option.category,
                    label: option.name,
                }))
            );
        }
    }, [categoriesResponse]);

    useEffect(() => {
        dispatch(setDefaultValuesAction());
    }, [dispatch]);

    return (
        <div className="adSubmissionPage">
            <CategoryName name={"Подача объявления"} />
            <AdSubmissionForm
                onSubmit={onSubmit}
                adUpdateError={adUpdateError}
                categoriesOptions={categoriesOptions}
                categoriesUploadError={categoriesError}
                currentAd={currentAd}
                addAdError={error}
            />
        </div>
    );
};

export default AdSubmissionPage;
