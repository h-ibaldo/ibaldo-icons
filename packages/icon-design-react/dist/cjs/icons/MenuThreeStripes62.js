"use strict";

const { forwardRef } = require('react');

const MenuThreeStripes62 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="2" y1="12.000000078527592" x2="22" y2="12.000000078527592" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="7.000000078527592" x2="22" y2="7.000000078527592" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="17.000000078527592" x2="22" y2="17.000000078527592" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MenuThreeStripes62.displayName = 'MenuThreeStripes62';

module.exports = MenuThreeStripes62;
module.exports.MenuThreeStripes62 = MenuThreeStripes62;
module.exports.default = MenuThreeStripes62;
