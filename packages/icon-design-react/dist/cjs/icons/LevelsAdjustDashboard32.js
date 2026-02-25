"use strict";

const { forwardRef } = require('react');

const LevelsAdjustDashboard32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.999999990798642" cy="16.000000000446562" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999990798642" y1="13.000000000446562" x2="11.999999990798642" y2="2.000000019906111" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999990798642" y1="22.000000019904292" x2="11.999999990798642" y2="19.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="5.000000000184627" cy="8.0000000004502" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.000000000184627" y1="11.0000000004502" x2="5.000000000184627" y2="22.000000019901563" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.000000000184627" y1="2.000000019904292" x2="5.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="18.999999990798642" cy="8.0000000004502" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.999999990798642" y1="11.0000000004502" x2="18.999999990798642" y2="22.000000019901563" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.999999990798642" y1="2.000000019904292" x2="18.999999990798642" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LevelsAdjustDashboard32.displayName = 'LevelsAdjustDashboard32';

module.exports = LevelsAdjustDashboard32;
module.exports.LevelsAdjustDashboard32 = LevelsAdjustDashboard32;
module.exports.default = LevelsAdjustDashboard32;
