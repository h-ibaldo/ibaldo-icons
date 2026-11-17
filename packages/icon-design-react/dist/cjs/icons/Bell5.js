"use strict";

const { forwardRef } = require('react');

const Bell5 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="20.000000004471076" y1="17.000000003885361" x2="4.000000004471076" y2="17.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.000000004471076,17.000000003885361v-8.000005999998393c0-3.313705185280014-2.686288814731597-5.999994000000697-5.999994000010702-5.999994000000697h-.000012000000424c-3.313705185280924,0-5.999993999988874,2.686288814720683-5.999993999988874,5.999994000000697v8.000005999998393" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.000000004471076" y1="21.000000003885361" x2="14.000000004471076" y2="21.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bell5.displayName = 'Bell5';

module.exports = Bell5;
module.exports.Bell5 = Bell5;
module.exports.default = Bell5;
