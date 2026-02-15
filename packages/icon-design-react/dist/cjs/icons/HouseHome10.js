"use strict";

const { forwardRef } = require('react');

const HouseHome10 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="18.999999999239662 21.000000000842192 4.999999999239662 21.000000000842192 4.999999999239662 13.000000000842192 1.999999999239662 13.000000000842192 11.999999999239662 3.000000000842192 21.999999999239662 13.000000000842192 18.999999999239662 13.000000000842192 18.999999999239662 21.000000000842192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.999999999239662" y1="4.000000000842192" x2="17.999999999239662" y2="9.000000000842192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

HouseHome10.displayName = 'HouseHome10';

module.exports = HouseHome10;
module.exports.HouseHome10 = HouseHome10;
module.exports.default = HouseHome10;
