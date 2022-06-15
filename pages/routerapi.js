import Router from "next/router";
import React, { useState, useEffect } from "react";

const RouterApi = () => {
  const handler = () => {
    Router.push({
      pathname: "/book/456",
      query: { year: 2022 },
    });
  };

  useEffect(() => {
    //   * 定义 跳转条件
    Router.beforePopState((url) => {
      if (url !== "/book") {
        alert("url is not allowed");
        return false;
      }
      return true;
    });
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      alert("app is changing to" + url);
    };
    Router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      Router.events.off(
        "routeChangeStart",
        handleRouteChange
      );
    };
  });
  return (
    <main>
      <h1>routerApi demo</h1>
      <ul>
        <li>
          <button onClick={() => Router.push("/book")}>
            /book
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              Router.push("/book/[id]", "book/123")
            }
          >
            /book/123
          </button>
        </li>
        <li>
          <button onClick={handler}>/book/456</button>
        </li>
      </ul>
    </main>
  );
};

export default RouterApi;
