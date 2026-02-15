"use strict";

const { forwardRef } = require('react');

const WarningExclamationCircle2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="12.000000005000402" cy="12.000000003886953" r="8.000000000000341" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000005000402" y1="15.010000003887399" x2="12.000000005000402" y2="15.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000005000402" y1="9.000000003886271" x2="12.000000005000402" y2="12.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WarningExclamationCircle2.displayName = 'WarningExclamationCircle2';

module.exports = WarningExclamationCircle2;
module.exports.WarningExclamationCircle2 = WarningExclamationCircle2;
module.exports.default = WarningExclamationCircle2;
