"use strict";

const { forwardRef } = require('react');

const ApplicationWindow2ArrowLeftRightSort2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M7.00000000018008,22.000000000448381l-3,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="20.00000000018008 22.000000000448381 22.00000000018008 20.000000000448381 20.00000000018008 18.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.00000000018008" y1="20.000000000448381" x2="22.00000000018008" y2="20.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.000000000369255 12.000000000446562 11.00000000018008 14.000000000268301 13.000000000010914 16.000000000446562" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.00000000018008" y1="14.000000000986802" x2="11.00000000018008" y2="14.000000000268301" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000180298" y1="5.000000000448381" x2="5.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000180298" y1="5.000000000448381" x2="8.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000180298" y1="5.000000000448381" x2="11.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow2ArrowLeftRightSort2.displayName = 'ApplicationWindow2ArrowLeftRightSort2';

module.exports = ApplicationWindow2ArrowLeftRightSort2;
module.exports.ApplicationWindow2ArrowLeftRightSort2 = ApplicationWindow2ArrowLeftRightSort2;
module.exports.default = ApplicationWindow2ArrowLeftRightSort2;
