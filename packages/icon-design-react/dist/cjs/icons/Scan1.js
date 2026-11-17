"use strict";

const { forwardRef } = require('react');

const Scan1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M3.999999981189831,14.999996564258254h18v6H1.999999981189831v-4c0-1.103830048988.896169951012-2,2-2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.999999981189831" y1="17.999996564258254" x2="7.999999981189831" y2="17.999996564258254" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.999999981189831,2.999996564258254l13.788854381999045,6.894427191000432c1.355136113079425.67756805654426,2.211145618000955,2.062620530181448,2.211145618000955,3.577708763998089v1.527864045001479" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.999999981189831" y1="11.999996564258254" x2="16.999999981189831" y2="11.999996564258254" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Scan1.displayName = 'Scan1';

module.exports = Scan1;
module.exports.Scan1 = Scan1;
module.exports.default = Scan1;
