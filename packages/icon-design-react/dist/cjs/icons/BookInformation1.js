"use strict";

const { forwardRef } = require('react');

const BookInformation1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M19,17H6.999997999999323c-1.1045683950897,0-1.999997999999323.895429604912351-1.999997999999323,1.999997999999323v.000004000001354c0,1.10456839509061.895429604909623,1.999997999999323,1.999997999999323,1.999997999999323h12.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19,17V3H6.999997999999323c-1.1045683950897,0-1.999997999999323.895429604912351-1.999997999999323,1.999997999999323v.000004000001354" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5" y1="5" x2="5" y2="19" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268548599342" y1="6.988779303362207" x2="12.025268548599342" y2="6.998779303362426" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="10" x2="12" y2="13" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BookInformation1.displayName = 'BookInformation1';

module.exports = BookInformation1;
module.exports.BookInformation1 = BookInformation1;
module.exports.default = BookInformation1;
