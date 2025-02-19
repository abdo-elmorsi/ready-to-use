// import React from 'react'
import React, { useEffect } from "react";
import VerticalNav from "./vertical-nav";
// import Scrollbar from 'smooth-scrollbar'
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../lib/slices/toggleSidebar";
import { sidebarMini } from "../lib/slices/toggleSidebar";
import { closeHead } from "../lib/slices/toggle-header";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const config = useSelector((state) => state.config);
  const isActiveSideBar = useSelector((state) => state.toggleMenu.value);
  const dispatch = useDispatch();
  const History = useHistory();

  useEffect(() => {
    History.listen(() => {
      dispatch(closeHead());
      dispatch(sidebarMini());
      // Scrollbar.init(document.getElementById('my-scrollbar'));
    });
  }, [History, dispatch]);

  return (
    <>
      <aside
        className={`sidebar sidebar-default navs-rounded-all sidebar-hover {{ sidebarVariants }} ${isActiveSideBar && "sidebar-mini"
          }`}
      >
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <Link to="/" className="navbar-brand">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 30 30"
              style={{
                enableBackground: "new 0 0 30 30",
                width: "30px",
              }}
              xmlSpace="preserve"
            >
              <style type="text/css">
                {"\n\t.st0{fill:#FFFFFF;}\n\t.st1{fill:url(#SVGID_1_);}\n"}
              </style>
              <path
                className="st0"
                d="M26,0H4C1.8,0,0,1.8,0,4v22c0,2.2,1.8,4,4,4h22c2.2,0,4-1.8,4-4V4C30,1.8,28.2,0,26,0z"
              />
              <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1={34.5273}
                y1={-6.1733}
                x2={-4.7378}
                y2={36.4015}
              >
                <stop
                  offset={0}
                  style={{
                    stopColor: "#0048B2",
                  }}
                />
                <stop
                  offset={1}
                  style={{
                    stopColor: "#012034",
                  }}
                />
              </linearGradient>
              <path
                className="st1"
                d="M10.9,19.6c0-0.5,0-1,0-1.3c0-0.1,0.1-0.2,0.2-0.2c0.5,0,0.9,0,1.4,0v1.5C12,19.2,11.3,19.2,10.9,19.6z  M17.8,12.9c-0.3,0-0.6,0-0.8,0c-0.3,0-0.4,0.1-0.4,0.3c0,0.6,0,1.2,0,1.7s-0.3,0.7-0.7,0.5c-0.6-0.4-1.3-0.4-1.9,0 c-0.4,0.2-0.7,0-0.7-0.5c0-0.6,0-1.2,0-1.8c0-0.1-0.1-0.2-0.2-0.3c-0.3,0.1-0.6,0.1-1,0.1v4.3h5.7V12.9z M15.8,14.5c0-0.5,0-1,0-1.4 c0-0.1-0.1-0.2-0.2-0.2c-0.4,0-0.8,0-1.2,0c-0.1,0-0.2,0.1-0.2,0.1c0,0.5,0,0.9,0,1.5C14.6,14.1,15.3,14.1,15.8,14.5z M6.8,12.8 c0.1-0.1,0.2-0.1,0.3-0.2L14.5,7c0.4-0.3,0.5-0.3,1,0l7.3,5.6c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.1,0.5,0.1,0.6-0.1 c0.2-0.2,0.2-0.5,0-0.6c-0.1-0.1-0.1-0.1-0.2-0.2c-2.7-2.2-5.5-4.4-8.2-6.6c-0.2-0.1-0.4-0.1-0.6,0c-1.2,1-2.5,2-3.7,3 c-1.5,1.2-3,2.4-4.6,3.6c-0.1,0.2-0.3,0.3-0.3,0.4C6.1,12.8,6.5,13,6.8,12.8z M8.9,18.1v4.1h5.6V18c-0.3,0-0.6,0-0.9,0 c-0.2,0-0.3,0.1-0.3,0.3c0,0.6,0,1.1,0,1.7s-0.3,0.8-0.8,0.5s-1.2-0.3-1.7,0S10,20.6,10,20s0-1.3,0-1.9H8.9z M21.9,22.3 c0.2,0,0.3,0,0.5,0c0.3,0,0.3-0.1,0.3-0.3c0-2.7,0-5.4,0-8c0-0.2-0.1-0.3-0.2-0.4c-2.4-1.9-4.8-3.7-7.2-5.5 c-0.2-0.3-0.5-0.3-0.6-0.2c-2.5,1.9-4.9,3.7-7.3,5.5c-0.2,0.1-0.3,0.3-0.3,0.6c0,2.6,0,5.1,0,7.7c0,0.1,0,0.2,0,0.3s0.1,0.2,0.2,0.2 c0.2,0,0.4,0,0.6,0v-0.4c0-1.3,0-2.6,0-3.9C8,17.2,8,17.2,8.7,17.2h2.6v-0.4c0-1.3,0-2.7,0-4c0-0.6,0.1-0.7,0.5-0.7 c2.1,0,4.2,0,6.2,0c0.5,0,0.6,0.1,0.6,0.6c0,1.3,0,2.7,0,4v0.5c0.9,0,1.8,0,2.6,0c0.6,0,0.7,0.1,0.7,0.7c0,1.3,0,2.7,0,4V22.3z  M17.5,19.6c0.4-0.4,1.1-0.4,1.6-0.1c0-0.5,0-0.9,0-1.4c0-0.1-0.1-0.1-0.2-0.2c-0.5,0-0.9,0-1.4,0V19.6z M30,4v22c0,2.2-1.8,4-4,4H4 c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h22C28.2,0,30,1.8,30,4z M24.7,22.8c0-0.3-0.2-0.5-0.5-0.5c-0.2,0-0.4,0-0.6,0v-8.5 c1.3-0.5,1.4-1.9,0.3-2.7c-2.9-2.2-5.7-4.4-8.5-6.7c-0.4-0.3-0.5-0.3-0.9,0L9.2,8.6c-1.1,0.9-2.3,1.8-3.4,2.7 c-0.2,0.2-0.4,0.4-0.5,0.7c-0.3,0.7,0.1,1.5,0.8,1.7c0.2,0.1,0.2,0.2,0.2,0.4c0,2.6,0,5.2,0,7.8v0.4H5.9c-0.6,0-0.7,0.1-0.7,0.7 c0,0.9,0,1.7,0,2.5c0,0.6,0.1,0.7,0.7,0.7H24c0.1,0,0.1,0,0.2,0c0.3,0,0.5-0.2,0.5-0.5C24.7,24.7,24.7,23.8,24.7,22.8z M6.1,23.7 h13.8c0.4,0,0.6,0.1,0.7,0.2c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5c0,0,0,0,0,0.1 c0,0.3-0.2,0.5-0.5,0.5c-0.2,0-0.3-0.1-0.4-0.2c0,0.3-0.2,0.4-0.8,0.4H6.1v0.1C6,25.2,6,25.2,6.6,25.2h16.8c0.1,0,0.2,0,0.3,0 c0.1,0,0.2-0.1,0.2-0.1c0-0.7,0-1.3,0-2H6.1V23.7z M21,18h-1.1c0,0.7,0,1.3,0,2c0,0.6-0.3,0.8-0.8,0.5c-0.6-0.4-1.3-0.4-1.8,0 c-0.5,0.3-0.7,0.1-0.7-0.5s0-1.1,0-1.7c0-0.1-0.1-0.3-0.2-0.3c-0.3,0-0.7,0-1,0v4.2H21V18z"
              />
            </svg>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 238.97 34.27"
              className="logo-title"
              width={100}
            >
              <defs>
                <style>{".cls-1{isolation:isolate}.cls-2{fill:#023f67}"}</style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <g id="Group_187" data-name="Group 187">
                    <g id="Square" className="cls-1">
                      <g className="cls-1">
                        <path
                          className="cls-2"
                          d="M22.38 21.52l6.48 2.05a14.51 14.51 0 01-5 8.06 14.12 14.12 0 01-8.8 2.64 14.27 14.27 0 01-10.81-4.51Q0 25.24 0 17.43 0 9.15 4.27 4.58A14.66 14.66 0 0115.51 0a13.79 13.79 0 019.87 3.59 13 13 0 013.39 6.11l-6.62 1.58a7 7 0 00-2.45-4.07 7.07 7.07 0 00-4.53-1.49 7.54 7.54 0 00-6 2.64c-1.53 1.77-2.3 4.62-2.3 8.57 0 4.19.76 7.17 2.26 9A7.35 7.35 0 0015 28.55a6.71 6.71 0 004.59-1.7 9.88 9.88 0 002.79-5.33zM33.09 21.36a13 13 0 011.56-6.13 10.71 10.71 0 014.42-4.52 13.08 13.08 0 016.38-1.56 12 12 0 018.93 3.54 12.23 12.23 0 013.48 8.94 12.38 12.38 0 01-3.51 9 11.89 11.89 0 01-8.85 3.58 13.9 13.9 0 01-6.3-1.49 10.23 10.23 0 01-4.55-4.37 14.57 14.57 0 01-1.56-6.99zm6.51.34a8 8 0 001.69 5.47 5.55 5.55 0 008.36 0 8.1 8.1 0 001.68-5.52 7.91 7.91 0 00-1.68-5.42 5.55 5.55 0 00-8.36 0 7.94 7.94 0 00-1.69 5.47zM62.83 33.7V.57h6.36V33.7zM97.71 33.7h-5.9v-3.53a9.42 9.42 0 01-3.47 3.07 8.89 8.89 0 01-4 1 9.16 9.16 0 01-7.09-3.33q-3-3.33-3-9.3t2.87-9.28a9.36 9.36 0 017.28-3.18 9 9 0 017 3.35V.57h6.35zM80.76 21.18q0 3.84 1.06 5.56a4.81 4.81 0 004.3 2.49 4.67 4.67 0 003.72-1.87 8.57 8.57 0 001.54-5.57c0-2.76-.5-4.74-1.49-6A4.73 4.73 0 0086.07 14a4.78 4.78 0 00-3.79 1.8 8.17 8.17 0 00-1.52 5.38zM138.08 21.52l6.48 2.05a14.46 14.46 0 01-5 8.06 14.1 14.1 0 01-8.8 2.64A14.27 14.27 0 01120 29.76q-4.24-4.52-4.25-12.33 0-8.28 4.27-12.85A14.67 14.67 0 01131.21 0a13.79 13.79 0 019.87 3.59 13 13 0 013.39 6.11l-6.62 1.58a6.84 6.84 0 00-7-5.56 7.54 7.54 0 00-6 2.64c-1.53 1.77-2.29 4.62-2.29 8.57q0 6.29 2.26 9a7.31 7.31 0 005.87 2.67 6.71 6.71 0 004.59-1.7 9.88 9.88 0 002.8-5.38zM156.59.57v12.18a9.49 9.49 0 0111.3-2.75 6.41 6.41 0 012.66 2.08 7.64 7.64 0 011.22 2.8 25 25 0 01.32 4.77V33.7h-6.35V21a18.83 18.83 0 00-.36-4.79 3.15 3.15 0 00-1.28-1.62 4.08 4.08 0 00-2.29-.6 5.26 5.26 0 00-2.82.77 4.42 4.42 0 00-1.82 2.32 13.68 13.68 0 00-.58 4.58v12h-6.35V.57zM183.28 17l-5.76-1a9 9 0 013.34-5.15q2.38-1.68 7.06-1.68a15.14 15.14 0 016.32 1 6.28 6.28 0 012.93 2.55c.57 1 .85 2.93.85 5.69l-.02 7.4a25.06 25.06 0 00.31 4.67 13.31 13.31 0 001.14 3.22h-6.29c-.16-.42-.36-1.05-.61-1.88-.1-.37-.18-.62-.22-.74a11.7 11.7 0 01-3.48 2.37 10 10 0 01-4 .79 8.17 8.17 0 01-5.84-2 6.69 6.69 0 01-2.14-5.08 6.81 6.81 0 011-3.63 6.26 6.26 0 012.72-2.44 21 21 0 015.05-1.48 34.84 34.84 0 006.14-1.61v-.6a3.3 3.3 0 00-.9-2.61 5.44 5.44 0 00-3.42-.78 4.56 4.56 0 00-2.64.67 4.65 4.65 0 00-1.54 2.32zm8.5 5.15a38 38 0 01-3.86 1 11.69 11.69 0 00-3.46 1.11 2.67 2.67 0 00-1.25 2.24 3.14 3.14 0 001 2.31 3.5 3.5 0 002.53 1 5.52 5.52 0 003.26-1.17 4 4 0 001.51-2.1 12.39 12.39 0 00.25-3.1zM204.28 6.44V.57h6.35v5.87zm0 27.26v-24h6.35v24zM239 33.7h-6.35V21.45a19.11 19.11 0 00-.4-5 3.52 3.52 0 00-1.33-1.77 3.78 3.78 0 00-2.2-.64 5.11 5.11 0 00-3 .91 4.61 4.61 0 00-1.8 2.39 21 21 0 00-.48 5.52V33.7h-6.34v-24h5.9v3.52a9.82 9.82 0 0111.75-3.31 6.47 6.47 0 012.63 1.93 7 7 0 011.24 2.67 19.47 19.47 0 01.35 4.27z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg> */}
            <span style={{ color: `${config.darkMode ? "#bfc9e3" : "#232d42"}` }} className="ms-2 logo-title" width={100}>
              En Course
            </span>
          </Link>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={() => dispatch(toggle())}
          >
            <i className="icon">
              <svg
                width="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 12.2744L19.25 12.2744"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
          </div>
        </div>
        <div
          className="sidebar-body data-scrollbar"
          data-scroll="1"
          id="my-scrollbar"
        >
          <div className="navbar-collapse" id="sidebar">
            <VerticalNav />
          </div>
        </div>
        <div className="sidebar-footer" />
      </aside>
    </>
  );
};

export default Sidebar;
