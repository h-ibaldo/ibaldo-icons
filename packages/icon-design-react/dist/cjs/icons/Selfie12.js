"use strict";

const { forwardRef } = require('react');

const Selfie12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999509295545067" y="4.999505878618947" width="20" height="14.000981371271337" rx="2.160322612580785" ry="2.160322612580785" transform="translate(23.999505859799683 .000487268709549) rotate(90)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999981180736" cy="9.499996564258254" r="2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.999999981180736,16.999996564258254v-2.000003000001016c0-1.656852592637733-1.343144407361251-2.999996999998984-2.999996999991708-2.999996999998984h-.000005999998393c-1.656852592641371,0-2.999997000009898,1.343144407361251-2.999997000009898,2.999996999998984v2.000003000001016" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Selfie12.displayName = 'Selfie12';

module.exports = Selfie12;
module.exports.Selfie12 = Selfie12;
module.exports.default = Selfie12;
