"use strict";

const { forwardRef } = require('react');

const XDeleteCloseCircle2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.999999990790457" cy="12.000000000897671" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.999999990919605" y1="15.000000000763976" x2="14.999999990650394" y2="9.000000001032276" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999990519427" y1="15.000000000894943" x2="8.999999991059667" y2="9.000000000897671" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

XDeleteCloseCircle2.displayName = 'XDeleteCloseCircle2';

module.exports = XDeleteCloseCircle2;
module.exports.XDeleteCloseCircle2 = XDeleteCloseCircle2;
module.exports.default = XDeleteCloseCircle2;
