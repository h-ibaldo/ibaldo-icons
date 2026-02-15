"use strict";

const { forwardRef } = require('react');

const ApplicationWindow1MusicNote43 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="22.000000000182808 13.0000000004502 15.000000000184627 14.000000000448381 15.000000000184627 21.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <ellipse cx="13.500000000184627" cy="21.000000000448381" rx="1.5" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.000000000184627" y1="13.000000000448381" x2="22.000000000184627" y2="20.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <ellipse cx="20.500000000184627" cy="20.000000000448381" rx="1.5" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.000000000184627,22.000000000448381h-4c-1.104569499661011,0-2-.89543050033717-2-2V4.000000000448381c0-1.10456949966192.895430500338989-2,2-2h16c1.104569499661011,0,2,.89543050033808,2,2v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000184627" y1="8.000000000448381" x2="22.000000000184627" y2="8.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000184846" y1="5.000000000448381" x2="5.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000184846" y1="5.000000000448381" x2="8.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000184846" y1="5.000000000448381" x2="11.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow1MusicNote43.displayName = 'ApplicationWindow1MusicNote43';

module.exports = ApplicationWindow1MusicNote43;
module.exports.ApplicationWindow1MusicNote43 = ApplicationWindow1MusicNote43;
module.exports.default = ApplicationWindow1MusicNote43;
