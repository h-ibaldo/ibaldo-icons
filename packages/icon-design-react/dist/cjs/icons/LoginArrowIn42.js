"use strict";

const { forwardRef } = require('react');

const LoginArrowIn42 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="10.067167566010539 9.43296768574146 13.067167566010539 12.43296768574146 10.067167566010539 15.43296768574146" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.067167566010539" y1="12.43296768574146" x2="13.067167566010539" y2="12.43296768574146" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.067167566010539" y="2.43296768574146" width="20" height="20" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LoginArrowIn42.displayName = 'LoginArrowIn42';

module.exports = LoginArrowIn42;
module.exports.LoginArrowIn42 = LoginArrowIn42;
module.exports.default = LoginArrowIn42;
