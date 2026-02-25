"use strict";

const { forwardRef } = require('react');

const WebsitePortalFashionHandbag2 = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  React.createElement('svg', {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M22,12.999999999998181V3.999999999998181c0-1.104569499661011-.895430500338989-2-2-2H4c-1.104569499670106,0-2,.895430500338989-2,2v16c0,1.104569499664649.895430500329894,2,2,2h1.000000003630703" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000003630921" y1="4.999999999998181" x2="5.000000003630703" y2="4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000003630921" y1="4.999999999998181" x2="8.000000003630703" y2="4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.000000003630703" y1="4.999999999998181" x2="11.000000003630703" y2="4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000003630703" y1="7.999999999998181" x2="22.000000003630703" y2="7.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.746027769706416,15.998782739430681l7.558481559890424.000000000338332c.430430408068787.00000000001819.812569251669629.27543009490546.948683298018295.683772234024218l1.333333333150222,4.000000000061846c.215843704560029.647531113801961-.266125572969031,1.316227766004886-.948683298109245,1.316227765972144l-10.225148226549209-.000000000458385c-.682557725140214-.000000000032742-1.164527002620162-.668696652275685-.94868329799101-1.316227766059455l1.333333333499468-3.999999999938154c.136114046401417-.408342139107845.518252890020449-.683772233962372.948683298091055-.683772233940545Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.025268549516113,15.998782739598028v-1.500002500000846c0-1.380710493864171-1.119287006129525-2.499997499999154-2.499997499999154-2.499997499999154h-.000005000001693c-1.380710493859624,0-2.499997499999154,1.119287006134982-2.499997499999154,2.499997499999154v1.500002500000846" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.025268549516113 15.998782739598028 16.025268549516113 17.998782739598028 15.025268549516113 17.998782739598028 15.025268549516113 15.998782739598028" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WebsitePortalFashionHandbag2.displayName = 'WebsitePortalFashionHandbag2';

module.exports = WebsitePortalFashionHandbag2;
module.exports.WebsitePortalFashionHandbag2 = WebsitePortalFashionHandbag2;
module.exports.default = WebsitePortalFashionHandbag2;
