"use strict";

const { forwardRef } = require('react');

const IInformation32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="7.025268553439673 10.99999656424734 10.025268553439673 10.99999656424734 10.025268553439673 21.999996564243702" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="10.025268553439673 10.99999656424734 14.025268553439673 10.99999656424734 14.025268553439673 21.999996564243702" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.025268553439673" y1="21.999996564243702" x2="17.025268553439673" y2="21.999996564243702" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="12.025268553439673" cy="4.99999656424734" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

IInformation32.displayName = 'IInformation32';

module.exports = IInformation32;
module.exports.IInformation32 = IInformation32;
module.exports.default = IInformation32;
