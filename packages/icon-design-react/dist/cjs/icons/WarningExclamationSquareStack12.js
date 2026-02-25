"use strict";

const { forwardRef } = require('react');

const WarningExclamationSquareStack12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.000000005000402" y="2.000000003886271" width="16" height="16" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.000000005000402,9.000000003886271v10c0,1.656854249493335-1.343145750510303,3-3,3h-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.000000005000402" y1="13.010000003887399" x2="10.000000005000402" y2="13.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.000000005000402" y1="7.000000003886271" x2="10.000000005000402" y2="10.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WarningExclamationSquareStack12.displayName = 'WarningExclamationSquareStack12';

module.exports = WarningExclamationSquareStack12;
module.exports.WarningExclamationSquareStack12 = WarningExclamationSquareStack12;
module.exports.default = WarningExclamationSquareStack12;
