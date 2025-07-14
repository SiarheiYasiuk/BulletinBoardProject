import React from "react";
import { useForm, Controller } from "react-hook-form";

import Loader from "../../../../components/Loader/Loader";

const ProfileForm = ({ onSubmit, user, userUpdateError, isLoading }) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    return (
        <div className="auth-container">
            {user ? (
                <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="email">
                        <div>Email:</div>
                        <div name="email">{user.email}</div>
                    </div>

                    <label>Телефон:</label>
                    {errors.phoneNumber && (
                        <span className="error-message">
                            {errors.phoneNumber.message}
                        </span>
                    )}
                    <Controller
                        name="phoneNumber"
                        control={control}
                        defaultValue={user.phoneNumber}
                        rules={{
                            pattern: {
                                value: /^\+?[0-9]*$/,
                                message: "Введите корректный номер телефона",
                            },
                            maxLength: {
                                value: 15,
                                message:
                                    "Превышено максимальное количество символов",
                            },
                        }}
                        render={({ field }) => <input {...field} />}
                    />

                    <label>Имя:</label>
                    {errors.name && (
                        <span className="error-message">
                            {errors.name.message}
                        </span>
                    )}
                    <Controller
                        name="name"
                        control={control}
                        defaultValue={user.name}
                        rules={{
                            maxLength: {
                                value: 20,
                                message:
                                    "Превышено максимальное количество символов",
                            },
                        }}
                        render={({ field }) => <input {...field} />}
                    />

                    <label>Город:</label>
                    {errors.city && (
                        <span className="error-message">
                            {errors.city.message}
                        </span>
                    )}
                    <Controller
                        name="city"
                        control={control}
                        defaultValue={user.city}
                        rules={{
                            maxLength: {
                                value: 20,
                                message:
                                    "Превышено максимальное количество символов",
                            },
                        }}
                        render={({ field }) => <input {...field} />}
                    />

                    <button type="submit">Сохранить изменения</button>
                    {userUpdateError && (
                        <span className="error-message">
                            {"Произошла ошибка обновления данных"}
                        </span>
                    )}
                    {!userUpdateError && isLoading === false && (
                        <span className="submit-message">
                            {"Данные успешно обновлены"}
                        </span>
                    )}
                </form>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default ProfileForm;
