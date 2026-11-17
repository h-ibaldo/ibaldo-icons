"use strict";

const { forwardRef } = require('react');

const BrowserWindowRestrictions2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M5.999999994000973,21.998779299956368h-2c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500340808,2-2,2h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999994000973" y1="18.998779307399673" x2="11.999999994000973" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.999999981634403" y="14.998779309280351" width="4.000000024714041" height="4.000000003343217" rx="1.999998017025506" ry="1.999998017025506" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.999999994103121" y="10.99877929978247" width="3.999999993873075" height="4.000000011723756" rx="1.999997999396013" ry="1.999997999396013" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999993990059" y1="12.998779307399673" x2="13.999999993990059" y2="16.998779307399673" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999994000973" y1="12.998779307399673" x2="9.999999994000973" y2="16.998779307399673" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999993990059" y1="11.998779307399673" x2="15.999999993990059" y2="11.998779307399673" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999993990059" y1="15.998779307399673" x2="15.999999993990059" y2="15.998779307399673" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999999993990059" y1="11.998779307399673" x2="9.999999993990059" y2="11.998779307399673" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999999993990059" y1="15.998779307399673" x2="9.999999993990059" y2="15.998779307399673" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.999999993990059" y="10.998779307399673" width="4" height="8" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.999999993990059,11.998779307399673c0,.552284749799583-.447715250200417,1-1,1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.99999999397005,11.99877930742241c.000000000030923.552284749798673.44771525024953.999999999980901,1.000000000049113.999999999955435" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.999999993990059,15.998779307399673c0,.552284749799583-.447715250200417,1-1,1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.99999999397005,15.99877930742241c.000000000030923.552284749798673.44771525024953.999999999977263,1.000000000049113.999999999955435" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999994000973" y1="6.998779299956368" x2="21.999999994000973" y2="6.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BrowserWindowRestrictions2.displayName = 'BrowserWindowRestrictions2';

module.exports = BrowserWindowRestrictions2;
module.exports.BrowserWindowRestrictions2 = BrowserWindowRestrictions2;
module.exports.default = BrowserWindowRestrictions2;
