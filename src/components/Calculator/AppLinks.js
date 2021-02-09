import React from "react";
import { isAndroid, isIOS, isMobile } from "react-device-detect";

const AndroidLink = (
  <a href="https://play.google.com/store/apps/details?id=com.accfuelcalc.accfuelcalculator&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
    <img
      alt="Get it on Google Play"
      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
    />
  </a>
);

function getLinksForDevice() {
  if (!isMobile) {
    return AndroidLink;
  } else if (isAndroid) {
    return AndroidLink;
  } else if (isIOS) {
    return <h2>IOS</h2>;
  }
}

class AppLinks extends React.Component {
  render() {
    return getLinksForDevice();
  }
}

export default AppLinks;
