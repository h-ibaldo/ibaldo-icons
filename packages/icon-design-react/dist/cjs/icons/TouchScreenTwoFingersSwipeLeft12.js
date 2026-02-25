"use strict";

const { forwardRef } = require('react');

const TouchScreenTwoFingersSwipeLeft12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="6.974731433976558 2.998779304765776 3.974731434245768 5.998779305034986 6.974731434516798 8.998779304765776" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731434245768" y1="5.998779304314667" x2="3.974731434245768" y2="5.998779305034986" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="15.974731434245768" cy="5.998779303955416" r="4.000000000000455" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.974731433436318 14.998779304765776 3.974731433706438 17.998779305034986 6.974731433976558 20.998779304765776" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731433706438" y1="17.998779304314667" x2="3.974731433706438" y2="17.998779305034986" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="15.974731433705983" cy="17.998779303955416" r="4.000000000000227" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TouchScreenTwoFingersSwipeLeft12.displayName = 'TouchScreenTwoFingersSwipeLeft12';

module.exports = TouchScreenTwoFingersSwipeLeft12;
module.exports.TouchScreenTwoFingersSwipeLeft12 = TouchScreenTwoFingersSwipeLeft12;
module.exports.default = TouchScreenTwoFingersSwipeLeft12;
