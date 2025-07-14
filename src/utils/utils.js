export const buildQueryString = ({ queryField, sort, field, fromPrice, toPrice, searchValue, limit, page, category }) => {
    let searchParams, filterParams, sortParams, categoryParams, pageParams = "";

    categoryParams = (category) ? `category=${category}&` : "";
    searchParams = (searchValue) ? `q=${searchValue}&` : "";
    filterParams = (fromPrice || toPrice) ? `price_gte=${fromPrice}&price_lte=${toPrice}&` : "";
    sortParams = (sort || field) ? `_sort=${field}&_order=${sort}&` : "";
    pageParams = (limit || page) ? `_limit=${limit}&_page=${page}` : "";

    const request = `${queryField}?${categoryParams}${searchParams}${filterParams}${sortParams}${pageParams}`;

    return request;
};

export const clearLocalStorage = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
}

export const writeDataToLocalStorage = (responseData) => {
    localStorage.setItem(
        "accessToken",
        responseData.accessToken
    );
    localStorage.setItem(
        "userId",
        responseData.user.id
    );
}

export const readLocalStorageAuthData = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");
    if (accessToken && userId) {
        return { accessToken, userId };
    }
    return null;
}

export const parseDate = (date) => {
    const dateTime = new Date(date);
    const options = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    }
    return dateTime.toLocaleString("ru-RU", options);
}