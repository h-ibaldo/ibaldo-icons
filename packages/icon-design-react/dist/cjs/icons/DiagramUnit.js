"use strict";

const { forwardRef } = require('react');

const DiagramUnit = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.949462885142566" y="15.000000000480213" width="7" height="7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="14.949462885142566" y="15.000000000480213" width="7" height="7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.949462885142566" y="2.000000000480213" width="7" height="7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="14.949462885142566" y="2.000000000480213" width="7" height="7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.949462885142566" y1="17.000000000480213" x2="6.949462885142566" y2="22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.949462885142566" y1="15.000000000480213" x2="8.949462885142566" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.949462885142566" y1="5.500000000480213" x2="14.949462885142566" y2="5.500000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.949462885142566" y1="18.500000000480213" x2="14.949462885142566" y2="18.500000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.449462885142566" y1="9.000000000480213" x2="18.449462885142566" y2="15.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.449462885142566" y1="9.000000000480213" x2="5.449462885142566" y2="15.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DiagramUnit.displayName = 'DiagramUnit';

module.exports = DiagramUnit;
module.exports.DiagramUnit = DiagramUnit;
module.exports.default = DiagramUnit;
