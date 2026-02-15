"use strict";

const { forwardRef } = require('react');

const ApplicationWindow2Cloud2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M6.00000000018008,22.000000000448381l-2,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.00000000018008,16.000000000448381h-.050415039060681c-.244506835939319-1.69403076171875-1.687866210939319-3-3.449584960939319-3s-3.205078125,1.30596923828125-3.449584960930224,3h-.050415039069776c-1.656860351560681,0-3,1.343139648438409-3,3,0,1.656860351563409,1.343139648439319,3,3,3h7c1.656860351569776,0,3-1.343139648436591,3-3,0-1.656860351561591-1.343139648430224-3-3-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000180298" y1="5.000000000448381" x2="5.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000180298" y1="5.000000000448381" x2="8.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000180298" y1="5.000000000448381" x2="11.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow2Cloud2.displayName = 'ApplicationWindow2Cloud2';

module.exports = ApplicationWindow2Cloud2;
module.exports.ApplicationWindow2Cloud2 = ApplicationWindow2Cloud2;
module.exports.default = ApplicationWindow2Cloud2;
