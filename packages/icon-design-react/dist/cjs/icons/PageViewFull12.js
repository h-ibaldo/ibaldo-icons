"use strict";

const { forwardRef } = require('react');

const PageViewFull12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.99999999829015" y="2.998782736161957" width="20" height="18" rx=".999999999997733" ry=".999999999997733" transform="translate(23.999999996041961 23.997565472862306) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.999999998300154 8.998782736161957 5.999999998300154 6.998782736161957 7.999999998300154 6.998782736161957" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.999999998210114 6.998782736252906 17.999999998210114 6.998782736161957 17.999999998300154 8.998782736161957" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17.999999998300154 14.998782736161957 17.999999998300154 16.998782736161957 15.999999998300154 16.998782736161957" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7.999999998390194 16.998782736071007 5.999999998390194 16.998782736161957 5.999999998300154 14.998782736161957" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

PageViewFull12.displayName = 'PageViewFull12';

module.exports = PageViewFull12;
module.exports.PageViewFull12 = PageViewFull12;
module.exports.default = PageViewFull12;
