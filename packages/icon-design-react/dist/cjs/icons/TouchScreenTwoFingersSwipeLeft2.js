"use strict";

const { forwardRef } = require('react');

const TouchScreenTwoFingersSwipeLeft2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="4.974731434245768 2.998779304496566 1.974731434245768 5.998779304496566 4.974731434245768 8.998779304496566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731434245768" y1="5.998779304496566" x2="1.974731434245768" y2="5.998779304496566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="17.974731434245768" cy="5.998779304496566" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="4.974731433706438 14.998779304496566 1.974731433706438 17.998779304496566 4.974731433706438 20.998779304496566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731433706438" y1="17.998779304496566" x2="1.974731433706438" y2="17.998779304496566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="17.974731433706438" cy="17.998779304496566" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TouchScreenTwoFingersSwipeLeft2.displayName = 'TouchScreenTwoFingersSwipeLeft2';

module.exports = TouchScreenTwoFingersSwipeLeft2;
module.exports.TouchScreenTwoFingersSwipeLeft2 = TouchScreenTwoFingersSwipeLeft2;
module.exports.default = TouchScreenTwoFingersSwipeLeft2;
