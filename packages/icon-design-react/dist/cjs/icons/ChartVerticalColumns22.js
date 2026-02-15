"use strict";

const { forwardRef } = require('react');

const ChartVerticalColumns22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="20.016630450567391 22.000000000389264 20.016630451375022 4.000000000389264 15.016630451375022 4.000000000170985 15.016630451153105 9.000000000170985 10.016630451153105 8.999999999938154 10.016630450927551 13.999999999938154 5.016630450927551 13.999999999719876 5.016630450567391 21.999999999719876" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.516630450567391" y1="21.999999999628926" x2="21.516630450567391" y2="22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.016630451153105" y1="9.000000000170985" x2="15.016630450567391" y2="22.000000000170985" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.016630450927551" y1="13.999999999938154" x2="10.016630450567391" y2="21.999999999938154" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartVerticalColumns22.displayName = 'ChartVerticalColumns22';

module.exports = ChartVerticalColumns22;
module.exports.ChartVerticalColumns22 = ChartVerticalColumns22;
module.exports.default = ChartVerticalColumns22;
