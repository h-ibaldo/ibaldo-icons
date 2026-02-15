"use strict";

const { forwardRef } = require('react');

const SliderLevelControl1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="11.999999977098923 15.999996563434252 8.999999977098923 18.999996563434252 5.999999977098923 15.999996563434252 5.999999977098923 5.999996563434252 11.999999977098923 5.999996563434252 11.999999977098923 15.999996563434252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999977098923" y1="11.999996563434252" x2="11.999999977098923" y2="11.999996563434252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.999999977098923" y1="11.999996563434252" x2="1.999999977098923" y2="11.999996563434252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SliderLevelControl1.displayName = 'SliderLevelControl1';

module.exports = SliderLevelControl1;
module.exports.SliderLevelControl1 = SliderLevelControl1;
module.exports.default = SliderLevelControl1;
