"use strict";

const { forwardRef } = require('react');

const XDeleteClose22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="3.999999991150617" y1="20.000000000538421" x2="19.999999990430297" y2="4.000000001257831" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.999999990070137" y1="20.000000000894943" x2="3.999999991510776" y2="4.000000000897671" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

XDeleteClose22.displayName = 'XDeleteClose22';

module.exports = XDeleteClose22;
module.exports.XDeleteClose22 = XDeleteClose22;
module.exports.default = XDeleteClose22;
