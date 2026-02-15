"use strict";

const { forwardRef } = require('react');

const DiagramVertical = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="11.949462885142566 9.000000000480213 6.949462885144385 13.000000000480213 11.949462885142566 17.000000000480213 16.949462885140747 13.000000000480213 11.949462885142566 9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.949462885142566" y="18.000000000480213" width="6" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="15.949462885142566" y="18.000000000480213" width="6" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.949462885142566 13.000000000480213 4.949462885142566 13.000000000480213 4.949462885142566 18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.949462885142566 13.000000000571163 18.949462885029789 13.000000000389264 18.949462885255343 18.000000000389264" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462885142566" y1="6.000000000480213" x2="11.949462885142566" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="6.949462885142566" y="2.000000000480213" width="10" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DiagramVertical.displayName = 'DiagramVertical';

module.exports = DiagramVertical;
module.exports.DiagramVertical = DiagramVertical;
module.exports.default = DiagramVertical;
