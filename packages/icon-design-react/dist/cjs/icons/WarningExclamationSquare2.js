"use strict";

const { forwardRef } = require('react');

const WarningExclamationSquare2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="3.974731450040053" y="4.000000000479304" width="16" height="16" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731450040053" y1="15.010000000480431" x2="11.974731450040053" y2="15.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731450040053" y1="9.000000000479304" x2="11.974731450040053" y2="12.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WarningExclamationSquare2.displayName = 'WarningExclamationSquare2';

module.exports = WarningExclamationSquare2;
module.exports.WarningExclamationSquare2 = WarningExclamationSquare2;
module.exports.default = WarningExclamationSquare2;
