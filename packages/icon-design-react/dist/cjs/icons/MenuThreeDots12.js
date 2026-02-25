"use strict";

const { forwardRef } = require('react');

const MenuThreeDots12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="12.035268553439892" y1="4.999996485714291" x2="12.025268553439673" y2="4.999996485714291" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.035268553439892" y1="11.999996485714291" x2="12.025268553439673" y2="11.999996485714291" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.035268553439892" y1="18.999996485714291" x2="12.025268553439673" y2="18.999996485714291" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MenuThreeDots12.displayName = 'MenuThreeDots12';

module.exports = MenuThreeDots12;
module.exports.MenuThreeDots12 = MenuThreeDots12;
module.exports.default = MenuThreeDots12;
