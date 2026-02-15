"use strict";

const { forwardRef } = require('react');

const ClosePaneRectangleArrowLeft3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999999461579" y="4.000000005698439" width="20" height="16" rx="1.999999999999394" ry="1.999999999999394" transform="translate(23.999999997846089 24.000000012473947) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999999998743078" y1="20.000000005338734" x2="8.00000000018008" y2="4.000000005338734" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.999999999461579" y1="12.000000006237315" x2="11.999999999461579" y2="12.000000005698894" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="14.999999999192369 15.000000005968104 11.999999999461579 12.000000005698894 14.99999999973079 9.000000005968104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ClosePaneRectangleArrowLeft3.displayName = 'ClosePaneRectangleArrowLeft3';

module.exports = ClosePaneRectangleArrowLeft3;
module.exports.ClosePaneRectangleArrowLeft3 = ClosePaneRectangleArrowLeft3;
module.exports.default = ClosePaneRectangleArrowLeft3;
