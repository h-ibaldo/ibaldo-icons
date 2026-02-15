"use strict";

const { forwardRef } = require('react');

const LupeSearchInList1 = forwardRef(({
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
    viewBox: "0 0 24 24.000000000000909",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="17.999999976489562" cy="15.998779299956368" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.171569800710131" y1="18.827209475737618" x2="11.999999976489562" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="2.999999976485014" cy="2.998779299956368" r="1.000000000002274" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="2.999999976485014" cy="7.998779299956368" r="1.000000000002274" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="2.999999976485014" cy="12.998779299956368" r="1.000000000002274" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999999976489562" y1="2.998779299956368" x2="18.999999976489562" y2="2.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999999976489562" y1="7.998779299956368" x2="18.999999976489562" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999999976489562" y1="12.998779299956368" x2="10.999999976489562" y2="12.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupeSearchInList1.displayName = 'LupeSearchInList1';

module.exports = LupeSearchInList1;
module.exports.LupeSearchInList1 = LupeSearchInList1;
module.exports.default = LupeSearchInList1;
