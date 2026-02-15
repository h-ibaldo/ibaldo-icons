"use strict";

const { forwardRef } = require('react');

const HandGearServices = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M2,21.999999999998181h11.150379618920851c1.1935563602201,0,2.347741320500063-.426960805210911,3.253956867280067-1.203716988169617l5.595663513799082-4.796283011830383-.062779210529698-.062779210529698c-1.097153679795156-1.097153679789699-2.84989401947314-1.17665976446915-4.041873542559188-.183343495229565l-3.339078317949316,2.782565264958976c-.359430002459703.299525002050359-.812495789290551.463557440800287-1.280368799321877.463557440800287h-1.275900129639922" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10,18.999999999998181h2c1.104569499661011,0,2-.895430500340808,2-2v-1h-5.63932022500012c-1.552450952880463,0-3.083581610047986.36145091752951-4.472135954998521,1.055728090001139l-1.88854382000136.944271909998861" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <circle cx="12" cy="6.999999999998181" r="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="7.009999999998399" x2="12" y2="6.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="1.999999999998181" x2="12" y2="3.499999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="10.499999999998181" x2="12" y2="11.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="17" y1="6.999999999998181" x2="15.5" y2="6.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="8.5" y1="6.999999999998181" x2="7" y2="6.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="15.535533906011551" y1="10.535533905847842" x2="14.474873734208813" y2="9.474873734097855" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="9.525126265791187" y1="4.525126265899416" x2="8.464466093992087" y2="3.464466094137606" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="8.464466094152158" y1="10.535533906007913" x2="9.525126265900326" y2="9.474873734208813" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="14.474873734099674" y1="4.525126265787549" x2="15.535533905858756" y2="3.464466093988449" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>` } }))
));

HandGearServices.displayName = 'HandGearServices';

module.exports = HandGearServices;
module.exports.HandGearServices = HandGearServices;
module.exports.default = HandGearServices;
