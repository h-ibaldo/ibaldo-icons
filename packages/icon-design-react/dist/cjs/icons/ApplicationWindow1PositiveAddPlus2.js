"use strict";

const { forwardRef } = require('react');

const ApplicationWindow1PositiveAddPlus2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M9.999999993652636,21.998779299956368H3.999999993652636c-1.104569499669196,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500330804-2,2-2h16c1.104569499660101,0,2,.895430500338989,2,2v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993652636" y1="7.998779299956368" x2="21.999999993652636" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.999999993652636" cy="16.998779299956368" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <line x1="16.999999993652636" y1="14.998779299956368" x2="16.999999993652636" y2="18.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.999999993652636" y1="16.998779299865419" x2="14.999999993652636" y2="16.99877930004368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <line x1="5.00999999364285" y1="4.998779299956368" x2="4.999999993642632" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.00999999364285" y1="4.998779299956368" x2="7.999999993642632" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.00999999364285" y1="4.998779299956368" x2="10.999999993642632" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow1PositiveAddPlus2.displayName = 'ApplicationWindow1PositiveAddPlus2';

module.exports = ApplicationWindow1PositiveAddPlus2;
module.exports.ApplicationWindow1PositiveAddPlus2 = ApplicationWindow1PositiveAddPlus2;
module.exports.default = ApplicationWindow1PositiveAddPlus2;
