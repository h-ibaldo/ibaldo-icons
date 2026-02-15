"use strict";

const { forwardRef } = require('react');

const AppsTab12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="11.999999990796823 12.000000000448381 1.999999990796823 7.000000000448381 11.999999990796823 2.000000000448381 21.999999990796823 7.000000000448381 11.999999990796823 12.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.999999990796823 9.500000000448381 1.999999990796823 12.000000000448381 11.999999990796823 17.000000000448381 21.999999990796823 12.000000000448381 16.999999990796823 9.500000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.999999990796823 14.500000000448381 1.999999990796823 17.000000000448381 11.999999990796823 22.000000000448381 21.999999990796823 17.000000000448381 16.999999990796823 14.500000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AppsTab12.displayName = 'AppsTab12';

module.exports = AppsTab12;
module.exports.AppsTab12 = AppsTab12;
module.exports.default = AppsTab12;
