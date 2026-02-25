"use strict";

const { forwardRef } = require('react');

const HouseHome82 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="18.999999999230567 21.000000000842192 4.999999999230567 21.000000000842192 4.999999999230567 13.000000000842192 1.999999999230567 13.000000000842192 11.999999999230567 3.000000000842192 21.999999999230567 13.000000000842192 18.999999999230567 13.000000000842192 18.999999999230567 21.000000000842192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

HouseHome82.displayName = 'HouseHome82';

module.exports = HouseHome82;
module.exports.HouseHome82 = HouseHome82;
module.exports.default = HouseHome82;
