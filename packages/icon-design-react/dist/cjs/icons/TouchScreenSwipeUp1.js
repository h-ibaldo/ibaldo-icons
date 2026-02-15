"use strict";

const { forwardRef } = require('react');

const TouchScreenSwipeUp1 = forwardRef(({
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
    viewBox: "0 0 24 24.000000000001819",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="9.025268549155953 6.998782739599847 12.025268549155953 3.998782739599847 15.025268549155953 6.998782739599847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268549155953" y1="11.998782739599847" x2="12.025268549155953" y2="3.998782739599847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="12.025268549155953" cy="15.998782739599847" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TouchScreenSwipeUp1.displayName = 'TouchScreenSwipeUp1';

module.exports = TouchScreenSwipeUp1;
module.exports.TouchScreenSwipeUp1 = TouchScreenSwipeUp1;
module.exports.default = TouchScreenSwipeUp1;
