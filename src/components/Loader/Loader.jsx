import React from "react";
import { Circles } from "react-loader-spinner";

import "./styles.css";

const Loader = () => {
    return (
        <div className="loaderWrapper">
                <Circles
                    height="200"
                    width="200"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    visible={true}
                />
        </div>
    );
};

export default Loader;
