"use strict";

const { forwardRef } = require('react');

const WarningExclamationTriangle4 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M5.373760370259333,20.000000000479304h13.20194215956144c1.524968575158709,0,2.488904761028607-1.638223486534116,1.748314552249212-2.971285862357036l-6.60097107978072-11.88174794360566c-.762010472330076-1.371618850189407-2.734618632168349-1.371618850189407-3.49662910448933,0l-6.60097107978072,11.88174794360566c-.740590208799404,1.333062375822919.223345977090503,2.971285862357036,1.748314552240117,2.971285862357036Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731450040053" y1="16.010000000480431" x2="11.974731450040053" y2="16.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731450040053" y1="11.000000000479304" x2="11.974731450040053" y2="13.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WarningExclamationTriangle4.displayName = 'WarningExclamationTriangle4';

module.exports = WarningExclamationTriangle4;
module.exports.WarningExclamationTriangle4 = WarningExclamationTriangle4;
module.exports.default = WarningExclamationTriangle4;
