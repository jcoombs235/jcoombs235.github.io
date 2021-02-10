import React from "react";
import styled from "styled-components";

class AppLinks extends React.Component {
  render() {
    return (
      <>
        <AppButtons>{AndroidLink}</AppButtons>
        <AppButtons>{IOSLink}</AppButtons>
      </>
    );
  }
}

const AppButtons = styled.div`
  display: block;
  margin: auto;
`;

const IOSButton = styled.img`
  height: 60px;
`;

const AndroidButton = styled.img`
  height: 80px;
`;

const AndroidLink = (
  <a href="https://play.google.com/store/apps/details?id=com.accfuelcalc.accfuelcalculator&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
    <AndroidButton
      alt="Get it on Google Play"
      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
    />
  </a>
);

const IOSLink = (
  <a href="https://apps.apple.com/us/app/acc-fuel-calculator/id1540153714?itsct=apps_box&amp;itscg=30200">
    <IOSButton
      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1605225600&h=bc35008d192e5529634991e6e8c153c5"
      alt="Download on the App Store"
    />
  </a>
);

export default AppLinks;
