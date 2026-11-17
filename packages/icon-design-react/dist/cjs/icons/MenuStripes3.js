"use strict";

const { forwardRef } = require('react');

const MenuStripes3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="4.000000004889444" y1="11.999999995256076" x2="15.000000004889444" y2="11.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.000000004889444" y1="4.999999995256076" x2="20.000000004889444" y2="4.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.000000004889444" y1="18.999999995256076" x2="20.000000004889444" y2="18.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MenuStripes3.displayName = 'MenuStripes3';

module.exports = MenuStripes3;
module.exports.MenuStripes3 = MenuStripes3;
module.exports.default = MenuStripes3;
