"use strict";

const { forwardRef } = require('react');

const TouchScreenSwipeLeft12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="7.025268549024986 14.99878273937793 4.025268549155953 11.998782739243325 7.02526854928692 8.99878273937793" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268549155953" y1="11.998782739603485" x2="4.025268549155953" y2="11.998782739243325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.025268549153679" cy="11.998782739781745" r="3.999999999998863" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TouchScreenSwipeLeft12.displayName = 'TouchScreenSwipeLeft12';

module.exports = TouchScreenSwipeLeft12;
module.exports.TouchScreenSwipeLeft12 = TouchScreenSwipeLeft12;
module.exports.default = TouchScreenSwipeLeft12;
