import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = ({ onSubmit, error }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        mode: "onBlur",
    });

    const password = watch("password", "");

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">E-Mail:</label>
                {errors.email && (
                    <span className="error-message">
                        {errors.email.message}
                    </span>
                )}
                <input
                    type="email"
                    id="email"
                    {...register("email", {
                        required: "Это поле обязательно",
                        minLength: {
                            value: 5,
                            message: "Минимальная длина - 5 символов",
                        },
                        maxLength: {
                            value: 45,
                            message: "Максимальная длина - 45 символов",
                        },
                    })}
                    required
                ></input>

                <label htmlFor="password">Пароль:</label>
                {errors.password && (
                    <span className="error-message">
                        Минимальная длина - 6 символов, максимальная - 30
                    </span>
                )}
                <input
                    type="password"
                    id="password"
                    {...register("password", {
                        required: "Это поле обязательно",
                        minLength: {
                            value: 6,
                            message: "Минимальная длина - 6 символов",
                        },
                        maxLength: {
                            value: 30,
                            message: "Максимальная длина - 30 символов",
                        },
                    })}
                    required
                ></input>

                <label htmlFor="repeatPassword">Повторите пароль:</label>
                {errors.repeatPassword && (
                    <span className="error-message">
                        {errors.repeatPassword.message}
                    </span>
                )}
                <input
                    type="password"
                    id="repeatPassword"
                    {...register("repeatPassword", {
                        required: "Это поле обязательно",
                        validate: (value) =>
                            value === password || "Пароли не совпадают",
                    })}
                    required
                ></input>

                {error && (
                    <span className="error-message">
                        {"Данный email уже зарегестрирован"}
                    </span>
                )}
                <button type="submit">
                    Зарегестрироваться
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
