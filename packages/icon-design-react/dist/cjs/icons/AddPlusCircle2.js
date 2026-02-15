"use strict";

const { forwardRef } = require('react');

const AddPlusCircle2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="11.974731445219732" y1="8.0000000004502" x2="11.974731445219732" y2="16.0000000004502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.974731445219732" y1="12.0000000004502" x2="7.974731445219732" y2="12.0000000004502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.974731445219732" cy="12.000000000446562" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AddPlusCircle2.displayName = 'AddPlusCircle2';

module.exports = AddPlusCircle2;
module.exports.AddPlusCircle2 = AddPlusCircle2;
module.exports.default = AddPlusCircle2;
