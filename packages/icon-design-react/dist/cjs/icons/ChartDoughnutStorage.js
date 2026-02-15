"use strict";

const { forwardRef } = require('react');

const ChartDoughnutStorage = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.949462885142566" cy="12.000000000480213" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.949462885142566" cy="12.000000000480213" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462885142566" y1="2.000000000480213" x2="11.949462885142566" y2="7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.020530697164759" y1="19.071067812190449" x2="15.484996791152298" y2="15.535533906338969" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartDoughnutStorage.displayName = 'ChartDoughnutStorage';

module.exports = ChartDoughnutStorage;
module.exports.ChartDoughnutStorage = ChartDoughnutStorage;
module.exports.default = ChartDoughnutStorage;
