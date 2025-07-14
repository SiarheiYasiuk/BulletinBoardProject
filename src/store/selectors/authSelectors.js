export const getAccessToken = (state) => state.auth.accessToken;

export const getAuthData = (state) => {
    const { accessToken, userId } = state.auth;
    return { accessToken, userId };
};