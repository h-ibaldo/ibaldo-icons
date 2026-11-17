"use strict";

const { forwardRef } = require('react');

const ChartVerticalColumnsLinesCircleX = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M21.799133300790345,10.000000000480213c.131225585930224.646240234367724.200866699209655,1.31494140625.200866699209655,2,0,5.52294921875-4.477172851549767,10-10,10-5.522827148439319,0-10-4.47705078125-10-10C2,6.477172852039075,6.477172851560681,2.000000000480213,12,2.000000000480213c.684997558590112,0,1.353698730470569.069580078117724,2,.200927734367724" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18" y1="6.000000000480213" x2="22" y2="2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.000000000090949" y1="6.000000000389264" x2="17.999999999909051" y2="2.000000000571163" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8" y1="15.000000000480213" x2="8" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="15.000000000480213" x2="12" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16" y1="15.000000000480213" x2="16" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartVerticalColumnsLinesCircleX.displayName = 'ChartVerticalColumnsLinesCircleX';

module.exports = ChartVerticalColumnsLinesCircleX;
module.exports.ChartVerticalColumnsLinesCircleX = ChartVerticalColumnsLinesCircleX;
module.exports.default = ChartVerticalColumnsLinesCircleX;
