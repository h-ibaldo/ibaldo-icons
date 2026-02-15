"use strict";

const { forwardRef } = require('react');

const ChecklistUnchecked1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="9.974731440139294" y1="4.000000003885361" x2="21.974731440139294" y2="4.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731440139294" y1="12.000000003885361" x2="21.974731440139294" y2="12.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731440139294" y1="20.000000003885361" x2="21.974731440139294" y2="20.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.974731463921216" y="1.999999993864349" width="3.999999952362487" height="3.999999991711264" rx="1.999997965745429" ry="1.999997965745429" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.974731463920762" y="9.999999982618931" width="3.999999952362487" height="4.000000013993374" rx="1.99999798165154" ry="1.99999798165154" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.974731463920762" y="17.999999991233636" width="3.999999952362487" height="3.999999996763961" rx="1.999997978159084" ry="1.999997978159084" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChecklistUnchecked1.displayName = 'ChecklistUnchecked1';

module.exports = ChecklistUnchecked1;
module.exports.ChecklistUnchecked1 = ChecklistUnchecked1;
module.exports.default = ChecklistUnchecked1;
