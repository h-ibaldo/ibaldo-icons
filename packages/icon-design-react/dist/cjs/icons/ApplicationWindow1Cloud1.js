"use strict";

const { forwardRef } = require('react');

const ApplicationWindow1Cloud1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M6.000000000184627,22.000000000448381h-2c-1.10456949966192,0-2-.895430500338989-2-2V4.000000000448381c0-1.10456949966192.89543050033808-2,2-2h16c1.10456949966192,0,2,.89543050033808,2,2v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000184627" y1="8.000000000448381" x2="22.000000000184627" y2="8.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.000000000184627,16.000000000448381h-.0504150390625c-.2445068359375-1.69403076171875-1.6878662109375-3-3.4495849609375-3s-3.205078125,1.30596923828125-3.4495849609375,3h-.0504150390625c-1.6568603515625,0-3,1.343139648438409-3,3,0,1.656860351563409,1.3431396484375,3,3,3h7c1.6568603515625,0,3-1.343139648436591,3-3,0-1.656860351561591-1.3431396484375-3-3-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000184846" y1="5.000000000448381" x2="5.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000184846" y1="5.000000000448381" x2="8.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000184846" y1="5.000000000448381" x2="11.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow1Cloud1.displayName = 'ApplicationWindow1Cloud1';

module.exports = ApplicationWindow1Cloud1;
module.exports.ApplicationWindow1Cloud1 = ApplicationWindow1Cloud1;
module.exports.default = ApplicationWindow1Cloud1;
