"use strict";

const { forwardRef } = require('react');

const ChartLineSquare2PositiveAddPlus = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M21.974731444799545,11.000000004070898v6c0,2.761423749150708-2.238576250849292,5-5,5H6.974731444799545c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000004070898c0-2.761423749150708,2.238576250850201-5,5-5h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.974731444799545 15.000000003892637 9.974731444799545 11.000000003892637 13.974731444799545 14.000000003892637 16.974731444799545 10.000000003892637" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.474731444799545" y1="7.000000004070898" x2="19.474731444710415" y2="2.000000004161848" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.974731444799545" y1="4.500000004161848" x2="21.974731444710415" y2="4.500000004070898" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartLineSquare2PositiveAddPlus.displayName = 'ChartLineSquare2PositiveAddPlus';

module.exports = ChartLineSquare2PositiveAddPlus;
module.exports.ChartLineSquare2PositiveAddPlus = ChartLineSquare2PositiveAddPlus;
module.exports.default = ChartLineSquare2PositiveAddPlus;
