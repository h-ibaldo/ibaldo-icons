"use strict";

const { forwardRef } = require('react');

const ShoppingBag32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M3.160238702219431,3.999999999998181h17.679522595550225c.640353171760346,0,1.160238702230345.519885530469997,1.160238702230345,1.160238702230345v9.839761297769655c0,2.75957512247-2.24042487753,5-5,5H7c-2.75957512247,0-5-2.24042487753-5-5V5.160238702217612c0-.640353171754324.519885530465107-1.160238702219431,1.160238702219431-1.160238702219431Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9" y1="7.999999999998181" x2="15" y2="7.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ShoppingBag32.displayName = 'ShoppingBag32';

module.exports = ShoppingBag32;
module.exports.ShoppingBag32 = ShoppingBag32;
module.exports.default = ShoppingBag32;
