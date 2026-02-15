"use strict";

const { forwardRef } = require('react');

const ApplicationWindow2KeyPasswordProtected1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M22.00000000018008,5.000000000448381v-1c0-1.10456949966192-.895430500340808-2-2-2l-16,.000000000001819c-1.104569499659192,0-2,.89543050033717-2,1.999999999998181v16.000000000001819c0,1.104569499661011.895430500340808,2,2,2l16-.000000000001819c1.104569499659192,0,2-.89543050033717,2-2v-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="17.000000028401075" y="8.000000000235744" width="4.999999987719434" height="7.999999999998835" rx="2.499997495258283" ry="2.499997495258283" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.00000000018008" y1="12.000000000448381" x2="17.00000000018008" y2="12.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.00000000018008" y1="15.000000000448381" x2="8.00000000018008" y2="12.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.00000000018008" y1="15.000000000448381" x2="11.00000000018008" y2="12.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000180298" y1="5.000000000448381" x2="5.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000180298" y1="5.000000000448381" x2="8.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000180298" y1="5.000000000448381" x2="11.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow2KeyPasswordProtected1.displayName = 'ApplicationWindow2KeyPasswordProtected1';

module.exports = ApplicationWindow2KeyPasswordProtected1;
module.exports.ApplicationWindow2KeyPasswordProtected1 = ApplicationWindow2KeyPasswordProtected1;
module.exports.default = ApplicationWindow2KeyPasswordProtected1;
