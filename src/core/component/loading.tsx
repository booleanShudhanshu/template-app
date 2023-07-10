import React from "react";
import "./styles.css";

const Loading = ({
  message = "Please wait...",
  loading = true,
  isFallback = false,
  background = "#f0f5ff",
}) => {
  return (
    <>
      {isFallback ? (
        <div className={"loadingContainer"}>
          {loading ? (
            <div>
              <img
                alt="loading"
                src="/public/default/newIcons/loading.gif"
                width="40px"
              />
              <p style={{ fontSize: "20px", marginTop: "32px" }}>{message}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div
          className={"noFallbackContainer"}
          style={{ backgroundColor: background }}
        >
          <h5>{message}</h5>
          {loading && (
            <div>
              <img
                alt="loading"
                src="/public/default/newIcons/loading.gif"
                height="20px"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Loading;
