"use strict";

const { forwardRef } = require('react');

const UploadArrowSquares = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.974731450026411" y="2.000000000462023" width="14" height="15" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.974731450026411,17.000000000462023v2c0,1.656854249490607,1.343145750505755,3.000000000000909,3,3.000000000000909h8c1.656854249493335,0,3-1.343145750510303,3-3.000000000000909v-9c0-1.656854249496064-1.343145750509393-3-3-3h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="11.974731450113723 9.000000000456566 8.974731449440696 6.000000000456566 5.974731450113723 9.000000000456566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.974731451190564" y1="13.000000000456566" x2="8.974731449440696" y2="6.000000000456566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

UploadArrowSquares.displayName = 'UploadArrowSquares';

module.exports = UploadArrowSquares;
module.exports.UploadArrowSquares = UploadArrowSquares;
module.exports.default = UploadArrowSquares;
