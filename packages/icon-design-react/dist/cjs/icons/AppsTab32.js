"use strict";

const { forwardRef } = require('react');

const AppsTab32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="11.999999990796823 10.000000000448381 1.999999990796823 6.000000000448381 11.999999990796823 2.000000000448381 21.999999990796823 6.000000000448381 11.999999990796823 10.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.749999990796823 10.500000000448381 1.999999990796823 12.000000000448381 11.999999990796823 16.000000000448381 21.999999990796823 12.000000000448381 18.249999990796823 10.500000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.749999990796823 17.000000000448381 1.999999990796823 18.500000000448381 11.999999990796823 22.500000000448381 21.999999990796823 18.500000000448381 18.249999990796823 17.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AppsTab32.displayName = 'AppsTab32';

module.exports = AppsTab32;
module.exports.AppsTab32 = AppsTab32;
module.exports.default = AppsTab32;
