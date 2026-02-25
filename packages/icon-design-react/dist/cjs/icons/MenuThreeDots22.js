"use strict";

const { forwardRef } = require('react');

const MenuThreeDots22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="12.035268553439892" y1="2.999996485714291" x2="12.025268553439673" y2="2.999996485714291" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.035268553439892" y1="11.999996485714291" x2="12.025268553439673" y2="11.999996485714291" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.035268553439892" y1="20.999996485714291" x2="12.025268553439673" y2="20.999996485714291" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MenuThreeDots22.displayName = 'MenuThreeDots22';

module.exports = MenuThreeDots22;
module.exports.MenuThreeDots22 = MenuThreeDots22;
module.exports.default = MenuThreeDots22;
