"use strict";

const { forwardRef } = require('react');

const SignalCellTower42 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="12.000000000029104" cy="11.999999999979991" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.000000000029104,11.999999999979991c0-3.313708498797496-2.686291501198866-6-6-6-3.313708498799315,0-6,2.686291501202504-6,6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.000000000029104,11.999999999979991c0-5.522847497995826-4.477152501998717-10.000000000003638-10-10.000000000003638C6.477152502029639,1.999999999976353,2.000000000029104,6.477152501984165,2.000000000029104,11.999999999979991" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.000000000029104" y1="21.999999999979991" x2="12.741699218779104" y2="13.854248046854991" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.258300781279104" y1="13.854248046854991" x2="8.000000000029104" y2="21.999999999979991" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SignalCellTower42.displayName = 'SignalCellTower42';

module.exports = SignalCellTower42;
module.exports.SignalCellTower42 = SignalCellTower42;
module.exports.default = SignalCellTower42;
