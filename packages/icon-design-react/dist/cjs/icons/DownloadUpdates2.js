"use strict";

const { forwardRef } = require('react');

const DownloadUpdates2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M1.974731450033687,17.000000000462023v1c0,1.104569499660101.895430500334442,2.000000000000909,2,2.000000000000909h16c1.104569499661011,0,2-.895430500340808,2-2.000000000000909v-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.065625243935756,4.000000000459295h7.818212412203138c1.201508299825946,0,1.915381955313933,1.342094459225336,1.243818773069506,2.338400178772645l-3.909106206104298,5.799402013713916c-.594604745109791.882133094973142-1.893032801023764.882133094973142-2.487637546134465,0l-3.909106206103388-5.799402013713916c-.671563182244427-.996305719547308.04231047324356-2.338400178772645,1.243818773069506-2.338400178772645Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DownloadUpdates2.displayName = 'DownloadUpdates2';

module.exports = DownloadUpdates2;
module.exports.DownloadUpdates2 = DownloadUpdates2;
module.exports.default = DownloadUpdates2;
