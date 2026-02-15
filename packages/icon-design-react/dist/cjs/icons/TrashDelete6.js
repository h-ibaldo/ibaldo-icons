"use strict";

const { forwardRef } = require('react');

const TrashDelete6 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="22.025268545410654 4.000000001929948 15.025268545410654 4.000000002243723 15.025268545319705 2.000000002243723 9.025268545319705 2.000000002512934 9.025268545410654 4.000000002512934 2.025268545410654 4.000000002829438" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.025268545410654,4.000000002019078l.00000000072032,16c.000000000049113,1.104569499663739-.895430500251678,2.000000000040018-1.99999999991087,2.00000000009004l-12,.00000000053933c-1.104569499659192.000000000049113-2.000000000040018-.89543050024804-2.00000000008913-1.999999999909051l-.00000000072032-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.025268545588915" y1="8.000000002200977" x2="16.025268546040024" y2="18.000000002200977" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268545588915" y1="8.000000002378329" x2="12.025268546040024" y2="18.000000002378329" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.025268545588915" y1="8.000000002560228" x2="8.025268546040024" y2="18.000000002560228" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TrashDelete6.displayName = 'TrashDelete6';

module.exports = TrashDelete6;
module.exports.TrashDelete6 = TrashDelete6;
module.exports.default = TrashDelete6;
