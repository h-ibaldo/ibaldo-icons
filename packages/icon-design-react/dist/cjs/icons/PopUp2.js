"use strict";

const { forwardRef } = require('react');

const PopUp2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M19,18h-4l-3,4-3-4h-4c-1.104569499660101,0-2-.895430500338989-2-2V4c0-1.104569499661011.895430500339899-2,2-2h14c1.104569499670106,0,2,.895430500338989,2,2v12c0,1.104569499661011-.895430500329894,2-2,2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8" y1="6" x2="16" y2="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8" y1="10" x2="16" y2="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8" y1="14" x2="16" y2="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

PopUp2.displayName = 'PopUp2';

module.exports = PopUp2;
module.exports.PopUp2 = PopUp2;
module.exports.default = PopUp2;
