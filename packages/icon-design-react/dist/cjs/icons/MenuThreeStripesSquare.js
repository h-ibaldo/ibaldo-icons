"use strict";

const { forwardRef } = require('react');

const MenuThreeStripesSquare = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="7" y1="12.000000078527592" x2="17" y2="12.000000078527592" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7" y1="7.000000078527592" x2="17" y2="7.000000078527592" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7" y1="17.000000078527592" x2="17" y2="17.000000078527592" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2" y="2.000000078527592" width="20" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MenuThreeStripesSquare.displayName = 'MenuThreeStripesSquare';

module.exports = MenuThreeStripesSquare;
module.exports.MenuThreeStripesSquare = MenuThreeStripesSquare;
module.exports.default = MenuThreeStripesSquare;
