export const getAdsInfo = (state) => {
    const { isLoading, error, data } = state.ads;
    return { isLoading, error, data };
};

export const getAdsPaginationInfo = (state) => {
    const { totalCount, page, limit } = state.ads;
    return { totalCount, page, limit };
};

export const getAdsSearchValue = (state) => state.ads.searchValue;

export const getAdsFilterInfo = (state) => {
    const { sort, field, fromPrice, toPrice, searchValue, limit, page } =
        state.ads;
    return { sort, field, fromPrice, toPrice, searchValue, limit, page };
};

export const getCurrentAd = (state) => state.ads.currentAd;
