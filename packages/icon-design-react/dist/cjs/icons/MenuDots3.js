"use strict";

const { forwardRef } = require('react');

const MenuDots3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="11.025268639606793" y="10.999996551712044" width="1.999999978512733" height="1.999999921422985" rx=".999402538453914" ry=".999402538453914" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="11.025268639606679" y="1.999996564256747" width="1.99999997851296" height="1.999999921421535" rx=".999402538466265" ry=".999402538466265" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="11.025268639606793" y="19.999996485710795" width="1.999999978512733" height="1.999999921455412" rx=".999402538456675" ry=".999402538456675" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MenuDots3.displayName = 'MenuDots3';

module.exports = MenuDots3;
module.exports.MenuDots3 = MenuDots3;
module.exports.default = MenuDots3;
