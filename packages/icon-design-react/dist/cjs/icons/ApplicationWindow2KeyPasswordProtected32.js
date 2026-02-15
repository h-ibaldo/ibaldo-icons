"use strict";

const { forwardRef } = require('react');

const ApplicationWindow2KeyPasswordProtected32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M18.00000000018008,10.000000000448381c-2.209167480470569,0-4,1.79083251953125-4,4,0,.307739257813409.042114257819776.60430908203125.10791015625.89208984375l-4.10791015625,4.10791015625v3h3v-2h2v-2h3c2.209167480479664,0,4-1.79083251953125,4-4s-1.790832519520336-4-4-4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.50000000018008" y1="13.51000000044678" x2="18.50000000018008" y2="13.500000000446562" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.00000000018008,22.000000000448381l-2,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000180298" y1="5.000000000448381" x2="5.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000180298" y1="5.000000000448381" x2="8.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000180298" y1="5.000000000448381" x2="11.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow2KeyPasswordProtected32.displayName = 'ApplicationWindow2KeyPasswordProtected32';

module.exports = ApplicationWindow2KeyPasswordProtected32;
module.exports.ApplicationWindow2KeyPasswordProtected32 = ApplicationWindow2KeyPasswordProtected32;
module.exports.default = ApplicationWindow2KeyPasswordProtected32;
