"use strict";

const { forwardRef } = require('react');

const ChecklistMultiple2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="3.949462885138928" cy="12.000000000480213" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.949462885138928" y1="4.000000000480213" x2="21.949462885138928" y2="4.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.949462885138928" y1="12.000000000480213" x2="21.949462885138928" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.949462885138928" y1="20.000000000480213" x2="21.949462885138928" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.949462885138928 20.000000000480213 3.949462885138928 22.000000000480213 6.949462885138928 18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.949462885138928 4.000000000480213 3.949462885138928 6.000000000480213 6.949462885138928 2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChecklistMultiple2.displayName = 'ChecklistMultiple2';

module.exports = ChecklistMultiple2;
module.exports.ChecklistMultiple2 = ChecklistMultiple2;
module.exports.default = ChecklistMultiple2;
