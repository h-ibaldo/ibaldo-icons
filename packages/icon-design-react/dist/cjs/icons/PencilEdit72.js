"use strict";

const { forwardRef } = require('react');

const PencilEdit72 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="22 6.085786445528356 18 2.085786445528356 2 18.085786445528356 2.00000000036016 22.085786445168196 6.00000000036016 22.085786445168196 22 6.085786445528356" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.99999999963984" y1="5.085786445168196" x2="19" y2="9.085786445528356" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

PencilEdit72.displayName = 'PencilEdit72';

module.exports = PencilEdit72;
module.exports.PencilEdit72 = PencilEdit72;
module.exports.default = PencilEdit72;
