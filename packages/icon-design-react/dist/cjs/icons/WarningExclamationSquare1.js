"use strict";

const { forwardRef } = require('react');

const WarningExclamationSquare1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="11.974731450040053" y1="16.010000000480431" x2="11.974731450040053" y2="16.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731450040053" y1="8.000000000479304" x2="11.974731450040053" y2="12.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.974731450049148" y="2.000000000928594" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WarningExclamationSquare1.displayName = 'WarningExclamationSquare1';

module.exports = WarningExclamationSquare1;
module.exports.WarningExclamationSquare1 = WarningExclamationSquare1;
module.exports.default = WarningExclamationSquare1;
