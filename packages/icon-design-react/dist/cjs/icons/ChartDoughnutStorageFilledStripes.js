"use strict";

const { forwardRef } = require('react');

const ChartDoughnutStorageFilledStripes = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="8.225158685923816" y1="21.275634766108851" x2="2.673767084360406" y2="15.724365234858851" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.059020990610406" y1="21.109619141108851" x2="11.949462885142566" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.997558588267566" y1="11.048095703608851" x2="12.901367182017566" y2="21.951904297358851" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.949462885142566" y1="12.000000000480213" x2="2.839904779673816" y2="7.890380859858851" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.937072748423816" y1="15.987548828608851" x2="18.496643060923816" y2="19.547119141108851" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.402221674204156" y1="5.452758789539075" x2="7.961853021860406" y2="9.012451172358851" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.262023920298816" y1="7.312500000480213" x2="6.544311517954156" y2="3.594848633289075" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.312499994517566" y1="2.363037109858851" x2="11.949462885142566" y2="5.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.949462885142566" cy="12.000000000480213" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.949462885142566" cy="12.000000000480213" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462885142566" y1="2.000000000480213" x2="11.949462885142566" y2="7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartDoughnutStorageFilledStripes.displayName = 'ChartDoughnutStorageFilledStripes';

module.exports = ChartDoughnutStorageFilledStripes;
module.exports.ChartDoughnutStorageFilledStripes = ChartDoughnutStorageFilledStripes;
module.exports.default = ChartDoughnutStorageFilledStripes;
