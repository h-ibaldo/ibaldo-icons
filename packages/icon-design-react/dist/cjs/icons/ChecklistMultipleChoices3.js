"use strict";

const { forwardRef } = require('react');

const ChecklistMultipleChoices3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="10.949462885138928" y1="4.000000000480213" x2="21.949462885138928" y2="4.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.949462885138928" y1="12.000000000480213" x2="21.949462885138928" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.949462885138928" y1="20.000000000480213" x2="21.949462885138928" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.949462885138928 12.000000000480213 3.949462885138928 14.000000000480213 6.949462885138928 10.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.949462885138928 4.000000000480213 3.949462885138928 6.000000000480213 6.949462885138928 2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.949462885138928" y="18.000000000480213" width="4" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChecklistMultipleChoices3.displayName = 'ChecklistMultipleChoices3';

module.exports = ChecklistMultipleChoices3;
module.exports.ChecklistMultipleChoices3 = ChecklistMultipleChoices3;
module.exports.default = ChecklistMultipleChoices3;
