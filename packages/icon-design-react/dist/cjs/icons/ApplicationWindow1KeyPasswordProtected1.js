"use strict";

const { forwardRef } = require('react');

const ApplicationWindow1KeyPasswordProtected1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="17.000000007920988" y="14.000000000235779" width="5.000000028648685" height="7.99999999999882" rx="2.499997512237252" ry="2.499997512237252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000000184627" y1="18.000000000448381" x2="17.000000000184627" y2="18.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000000184627" y1="21.000000000448381" x2="8.000000000184627" y2="18.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.000000000184627" y1="21.000000000448381" x2="11.000000000184627" y2="18.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.000000000184627,11.000000000448381v-7c0-1.10456949966192-.895430500338989-2-2-2H4.000000000184627c-1.10456949966192,0-2,.89543050033808-2,2v16c0,1.10456949966283.89543050033808,2,2,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000184627" y1="8.000000000448381" x2="22.000000000184627" y2="8.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000184846" y1="5.000000000448381" x2="5.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000184846" y1="5.000000000448381" x2="8.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000184846" y1="5.000000000448381" x2="11.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow1KeyPasswordProtected1.displayName = 'ApplicationWindow1KeyPasswordProtected1';

module.exports = ApplicationWindow1KeyPasswordProtected1;
module.exports.ApplicationWindow1KeyPasswordProtected1 = ApplicationWindow1KeyPasswordProtected1;
module.exports.default = ApplicationWindow1KeyPasswordProtected1;
