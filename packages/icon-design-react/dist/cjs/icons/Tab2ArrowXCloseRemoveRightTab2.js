"use strict";

const { forwardRef } = require('react');

const Tab2ArrowXCloseRemoveRightTab2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="13.149805218625261 21.997565477288845 2.050537104505565 21.997565477288845 2.050537104505565 1.997565477288845 11.050537104505565 1.997565477288845 11.050537104505565 5.997565477288845 22.050537104505565 5.997565477288845 22.050537104505565 12.997565477288845" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.050537104505565" y1="1.997565477288845" x2="15.050537104505565" y2="1.997565477288845" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.050537104505565" y1="16.997565477288845" x2="22.050537104505565" y2="21.997565477288845" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.050537104505565" y1="16.997565477288845" x2="17.050537104505565" y2="21.997565477288845" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.050537104505565" y1="13.997565477288845" x2="14.050537104505565" y2="13.997565477288845" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="11.050537104505565 10.997565477288845 14.050537104505565 13.997565477288845 11.050537104505565 16.997565477288845" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Tab2ArrowXCloseRemoveRightTab2.displayName = 'Tab2ArrowXCloseRemoveRightTab2';

module.exports = Tab2ArrowXCloseRemoveRightTab2;
module.exports.Tab2ArrowXCloseRemoveRightTab2 = Tab2ArrowXCloseRemoveRightTab2;
module.exports.default = Tab2ArrowXCloseRemoveRightTab2;
