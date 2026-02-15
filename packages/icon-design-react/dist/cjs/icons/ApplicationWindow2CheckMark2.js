"use strict";

const { forwardRef } = require('react');

const ApplicationWindow2CheckMark2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="14.999999993632628 12.998779299956368 10.999999993632628 16.998779299956368 8.999999993632628 14.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.999999993632628" y="1.998779299956368" width="20.000000000000909" height="20" rx="2.000000000000091" ry="2.000000000000091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993632628" y1="7.998779299956368" x2="21.999999993633537" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.00999999364285" y1="4.998779299956368" x2="4.999999993642632" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.00999999364285" y1="4.998779299956368" x2="7.999999993642632" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.00999999364285" y1="4.998779299956368" x2="10.999999993642632" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow2CheckMark2.displayName = 'ApplicationWindow2CheckMark2';

module.exports = ApplicationWindow2CheckMark2;
module.exports.ApplicationWindow2CheckMark2 = ApplicationWindow2CheckMark2;
module.exports.default = ApplicationWindow2CheckMark2;
