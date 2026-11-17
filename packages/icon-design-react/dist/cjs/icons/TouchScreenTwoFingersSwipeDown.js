"use strict";

const { forwardRef } = require('react');

const TouchScreenTwoFingersSwipeDown = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="20.974731437505397 16.998779304023628 17.974731437225273 19.998779303754418 14.974731437505397 16.998779303485207" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.974731437956507" y1="11.998779303754418" x2="17.974731437225273" y2="19.998779303754418" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="17.974731438316212" cy="7.998779303754418" r="4.000000000000227" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.974731437505397 16.998779304562049 5.974731437225273 19.998779304292839 2.974731437505397 16.998779304023628" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.974731437956507" y1="11.998779304292839" x2="5.974731437225273" y2="19.998779304292839" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="5.974731438316212" cy="7.998779304292839" r="4.000000000000227" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TouchScreenTwoFingersSwipeDown.displayName = 'TouchScreenTwoFingersSwipeDown';

module.exports = TouchScreenTwoFingersSwipeDown;
module.exports.TouchScreenTwoFingersSwipeDown = TouchScreenTwoFingersSwipeDown;
module.exports.default = TouchScreenTwoFingersSwipeDown;
