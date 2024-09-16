import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { LogoColor } from "../../components/LogoColor";
import { Wordmarkblack2 } from "../../icons/Wordmarkblack2";
import "./style.css";

export const IphoneSe = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="iphone-SE"
      style={{
        alignItems: screenWidth < 1280 ? "center" : undefined,
        backgroundColor: screenWidth < 1280 ? "var(--deep-blue100)" : screenWidth >= 1280 ? "#010712" : undefined,
        flexDirection: screenWidth >= 1280 ? "row" : undefined,
        gap: screenWidth < 1280 ? "8px" : undefined,
        justifyContent: screenWidth >= 1280 ? "center" : undefined,
        minHeight: screenWidth < 1280 ? "100vh" : undefined,
        minWidth: screenWidth < 1280 ? "360px" : undefined,
        position: screenWidth < 1280 ? "relative" : undefined,
        width: screenWidth >= 1280 ? "100%" : undefined,
      }}
    >
      <div
        className="frame-7"
        style={{
          alignItems: screenWidth < 1280 ? "center" : undefined,
          alignSelf: screenWidth < 1280 ? "stretch" : undefined,
          backgroundColor: screenWidth >= 1280 ? "var(--deep-blue100)" : undefined,
          display: screenWidth < 1280 ? "flex" : undefined,
          flex: screenWidth < 1280 ? "1" : undefined,
          flexDirection: screenWidth < 1280 ? "column" : undefined,
          flexGrow: screenWidth < 1280 ? "1" : undefined,
          gap: screenWidth < 1280 ? "40px" : undefined,
          height: screenWidth >= 1280 ? "832px" : undefined,
          justifyContent: screenWidth < 1280 ? "center" : undefined,
          position: screenWidth < 1280 ? "relative" : undefined,
          width: screenWidth >= 1280 ? "1280px" : undefined,
        }}
      >
        {screenWidth < 1280 && (
          <>
            <div className="frame">
              <div className="akanaba-horintal">
                <LogoColor
                  className="logo-color-instance"
                  subtract="/img/subtract-3.svg"
                  subtractClassName="instance-node"
                />
                <div className="wordmark-black-wrapper">
                  <Wordmarkblack2 className="wordmark-black" />
                </div>
              </div>
              <div className="div">
                <div className="div-wrapper">
                  <div className="text-wrapper">Empowering Minds</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper">Inspiring Connections</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper">Revolutionizing Research</div>
                </div>
              </div>
            </div>
            <div className="frame-2">
              <div className="text-wrapper-2">Become an Akanaba Pioneer</div>
              <div className="frame-3">
                <p className="p">
                  Interested in shaping the future of research? Join the first 1,000 early adopters building a new era
                  of scientific collaboration.
                </p>
                <p className="message-me-on">
                  <span className="span">Message me on LinkedIn </span>
                  <span className="text-wrapper-3">for a personal invite to the Akanaba Pioneers Circle on Slack.</span>
                </p>
              </div>
            </div>
          </>
        )}

        {screenWidth >= 1280 && (
          <div className="frame-4">
            <div className="frame-5">
              <div className="akanaba-horintal-2">
                <LogoColor className="logo-color-2" subtract="/img/subtract-5.svg" subtractClassName="logo-color-3" />
                <div className="wordmark-black-wrapper">
                  <Wordmarkblack2 className="wordmarkblack-2" />
                </div>
              </div>
              <div className="div-wrapper">
                <div className="flexcontainer">
                  <p className="text">
                    <span className="text-wrapper-4">
                      Empowering Minds
                      <br />
                    </span>
                  </p>
                  <p className="text">
                    <span className="text-wrapper-4">
                      Inspiring Connections
                      <br />
                    </span>
                  </p>
                  <p className="text">
                    <span className="text-wrapper-4">Revolutionizing Research</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-2">Become an Akanaba Pioneer</div>
              <div className="frame-3">
                <p className="text-wrapper-5">
                  Interested in shaping the future of research? Be one of the first 1,000 early adopters to help build a
                  new era of scientific collaboration and innovation.
                </p>
                <div className="frame-3">
                  <p className="message-me-on-2">
                    <span className="text-wrapper-6">Message me on LinkedIn </span>
                    <span className="text-wrapper-7">
                      for a personal invite to the Akanaba Pioneers Circle on Slack.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
