"use strict";

const { forwardRef } = require('react');

const Briefcase = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2" y="6.999999999998181" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8,6.999999999998181v-2c0-1.104569499659192.895430500340808-2,2-2h4c1.104569499659192,0,2,.895430500340808,2,2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Briefcase.displayName = 'Briefcase';

module.exports = Briefcase;
module.exports.Briefcase = Briefcase;
module.exports.default = Briefcase;
