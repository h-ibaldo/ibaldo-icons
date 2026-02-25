"use strict";

const { forwardRef } = require('react');

const TouchScreenSwipeUp22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="9.025268549155953 4.998782739599847 12.025268549155953 1.998782739599847 15.025268549155953 4.998782739599847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268549155953" y1="9.998782739599847" x2="12.025268549155953" y2="1.998782739599847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="12.025268549155953" cy="17.998782739599847" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TouchScreenSwipeUp22.displayName = 'TouchScreenSwipeUp22';

module.exports = TouchScreenSwipeUp22;
module.exports.TouchScreenSwipeUp22 = TouchScreenSwipeUp22;
module.exports.default = TouchScreenSwipeUp22;
