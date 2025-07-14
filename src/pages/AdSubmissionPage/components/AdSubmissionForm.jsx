import React from "react";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";

import Loader from "../../../components/Loader/Loader";
import CategoryName from "./../../../components/CategoryName/CategoryName";
import "./styles.css";

const AdSubmissionForm = ({
    onSubmit,
    adUpdateError,
    categoriesUploadError,
    categoriesOptions,
    addAdError,
    currentAd,
}) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    if (categoriesUploadError) {
        return (
            <div>
                Ошибка при запросе данных по категориям. <br />{" "}
                {categoriesUploadError}
            </div>
        );
    }

    return (
        <div className="auth-container">
            {categoriesOptions ? (
                <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                    <label>Выбор категории*</label>
                    <Controller
                        name="adCategory"
                        control={control}
                        defaultValue={
                            currentAd
                                ? categoriesOptions.find(
                                      (option) =>
                                          option.value === currentAd.category
                                  )
                                : ""
                        }
                        rules={{
                            required: "Поле обязательно для заполнения",
                        }}
                        render={({ field }) => (
                            <Select
                                styles={{
                                    control: (baseStyles) => ({
                                        ...baseStyles,
                                        width: "350px",
                                        height: "30px",
                                        marginBottom: "15px",
                                        border: "2px solid rgba(157, 157, 157, 1)",
                                        borderRadius: "5px",
                                    }),
                                    placeholder: (baseStyles) => ({
                                        ...baseStyles,
                                        color: "black",
                                        paddingBottom: "5px",
                                    }),
                                    indicatorSeparator: (baseStyles) => ({
                                        ...baseStyles,
                                        display: "none",
                                    }),
                                    dropdownIndicator: (baseStyles) => ({
                                        ...baseStyles,
                                        color: "black",
                                    }),
                                    valueContainer: (baseStyles) => ({
                                        ...baseStyles,
                                        padding: "0 8px",
                                    }),
                                }}
                                {...field}
                                options={categoriesOptions}
                                placeholder="Выберите категорию"
                            />
                        )}
                    />
                    {errors.adCategory && (
                        <span className="error-message">
                            {errors.adCategory.message}
                        </span>
                    )}

                    <label>Название товара/услуги*</label>
                    <Controller
                        name="adName"
                        control={control}
                        defaultValue={currentAd ? currentAd.name : ""}
                        rules={{
                            required: "Поле обязательно для заполнения",
                        }}
                        render={({ field }) => (
                            <input {...field} maxLength={75} />
                        )}
                    />
                    {errors.adName && (
                        <span className="error-message">
                            {errors.adName.message}
                        </span>
                    )}

                    <label>Цена*</label>
                    <Controller
                        name="adPrice"
                        control={control}
                        defaultValue={currentAd ? currentAd.price : ""}
                        rules={{
                            required: "Поле обязательно для заполнения",
                            pattern: {
                                value: /^[0-9]*\.?[0-9]*$/,
                                message: "Введите числовое значение",
                            },
                        }}
                        render={({ field }) => (
                            <input {...field} maxLength={15} />
                        )}
                    />
                    {errors.adPrice && (
                        <span className="error-message">
                            {errors.adPrice.message}
                        </span>
                    )}

                    <label>Описание*</label>
                    <Controller
                        name="adDescription"
                        control={control}
                        defaultValue={currentAd ? currentAd.description : ""}
                        rules={{
                            required: "Поле обязательно для заполнения",
                        }}
                        render={({ field }) => (
                            <textarea {...field} rows={4} maxLength={500} />
                        )}
                    />
                    {errors.adDescription && (
                        <span className="error-message">
                            {errors.adDescription.message}
                        </span>
                    )}

                    <CategoryName name={"О продавце"} />

                    <label>Имя*</label>
                    <Controller
                        name="ownerName"
                        control={control}
                        defaultValue={currentAd ? currentAd.ownerName : ""}
                        rules={{
                            required: "Поле обязательно для заполнения",
                        }}
                        render={({ field }) => (
                            <input {...field} maxLength={20} />
                        )}
                    />
                    {errors.ownerName && (
                        <span className="error-message">
                            {errors.ownerName.message}
                        </span>
                    )}

                    <label>Телефон*</label>
                    <Controller
                        name="ownerPhoneNumber"
                        control={control}
                        defaultValue={currentAd ? currentAd.ownerPhoneNumber : ""}
                        rules={{
                            required: "Поле обязательно для заполнения",
                            pattern: {
                                value: /^\+?[0-9]*$/,
                                message: "Введите корректный номер телефона",
                            },
                        }}
                        render={({ field }) => (
                            <input {...field} maxLength={15} />
                        )}
                    />
                    {errors.ownerPhoneNumber && (
                        <span className="error-message">
                            {errors.ownerPhoneNumber.message}
                        </span>
                    )}

                    <label>Город*</label>
                    <Controller
                        name="place"
                        control={control}
                        defaultValue={currentAd ? currentAd.place : ""}
                        rules={{
                            required: "Поле обязательно для заполнения",
                        }}
                        render={({ field }) => (
                            <input {...field} maxLength={20} />
                        )}
                    />
                    {errors.place && (
                        <span className="error-message">
                            {errors.place.message}
                        </span>
                    )}

                    <button type="submit">
                        {currentAd ? "Изменить" : "Подать"} объявление
                    </button>
                    {addAdError && (
                        <span className="error-message">
                            {"Произошла ошибка добавления данных"}
                        </span>
                    )}
                    {adUpdateError && (
                        <span className="error-message">
                            {"Произошла ошибка изменения данных"}
                        </span>
                    )}
                </form>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default AdSubmissionForm;
