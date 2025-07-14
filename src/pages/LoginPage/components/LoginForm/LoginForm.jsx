import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = ({ onSubmit, error }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    return (
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">E-Mail:</label>
            {errors.email && (
                <span className="error-message">
                    {errors.email.type === "required" && "Это поле обязательно"}
                </span>
            )}
            <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                required
            ></input>

            <label htmlFor="password">Пароль:</label>
            {errors.password && (
                <span className="error-message">
                    {errors.password.type === "required" &&
                        "Это поле обязательно"}
                    {errors.password.type === "minLength" &&
                        "Минимальная длина - 6 символов"}
                    {errors.password.type === "maxLength" &&
                        "Максимальная длина - 30 символов"}
                </span>
            )}
            <input
                type="password"
                id="password"
                {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 30,
                })}
                required
            ></input>

            {error && (
                <span className="error-message">
                    {"Ошибка входа, проверьте правильность ввода данных"}
                </span>
            )}
            <button type="submit">
                Войти
            </button>
        </form>
    );
};

export default LoginForm;
