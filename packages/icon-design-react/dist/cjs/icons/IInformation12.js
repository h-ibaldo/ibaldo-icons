"use strict";

const { forwardRef } = require('react');

const IInformation12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="8.025268553439673 10.99999656424734 12.025268553439673 10.99999656424734 12.025268553439673 20.999996564243702" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.025268553439673" y1="20.999996564243702" x2="16.025268553439673" y2="20.999996564243702" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="12.025268553439673" cy="4.99999656424734" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

IInformation12.displayName = 'IInformation12';

module.exports = IInformation12;
module.exports.IInformation12 = IInformation12;
module.exports.default = IInformation12;
