"use strict";

const { forwardRef } = require('react');

const MenuTwoStripes12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="2" y1="8.000000078527592" x2="22" y2="8.000000078527592" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="16.000000078527592" x2="22" y2="16.000000078527592" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MenuTwoStripes12.displayName = 'MenuTwoStripes12';

module.exports = MenuTwoStripes12;
module.exports.MenuTwoStripes12 = MenuTwoStripes12;
module.exports.default = MenuTwoStripes12;
