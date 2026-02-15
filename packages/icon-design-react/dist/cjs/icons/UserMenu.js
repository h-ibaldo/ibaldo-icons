"use strict";

const { forwardRef } = require('react');

const UserMenu = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="22.000000004900357" y1="6.999999995256076" x2="17.000000004900357" y2="6.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.000000004900357" y1="11.999999995256076" x2="17.000000004900357" y2="11.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.000000004900357" y1="16.999999995256076" x2="17.000000004900357" y2="16.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="7.500000004900357" cy="8.499999995256076" r="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.000000004900357,18.999999995256076v-2c0-2.761423749154346-2.238576250849292-5-5-5h-1c-2.761423749159803,0-5,2.238576250845654-5,5v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

UserMenu.displayName = 'UserMenu';

module.exports = UserMenu;
module.exports.UserMenu = UserMenu;
module.exports.default = UserMenu;
