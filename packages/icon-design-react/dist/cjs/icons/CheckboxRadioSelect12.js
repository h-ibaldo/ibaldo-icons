"use strict";

const { forwardRef } = require('react');

const CheckboxRadioSelect12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.974731440099276" cy="12.000000003885361" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.974731440099276" cy="12.000000003885361" r="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.974731440099276 12.000000003885361 11.308064773440492 13.333333337217482 13.974731440099276 10.666666670556879" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckboxRadioSelect12.displayName = 'CheckboxRadioSelect12';

module.exports = CheckboxRadioSelect12;
module.exports.CheckboxRadioSelect12 = CheckboxRadioSelect12;
module.exports.default = CheckboxRadioSelect12;
