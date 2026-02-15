"use strict";

const { forwardRef } = require('react');

const PageViewOpenViewInNewTabArrowDown2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="11.999999993611709 21.998779299956368 1.999999993611709 21.998779299956368 1.999999993611709 1.998779299956368 10.999999993611709 1.998779299956368 10.999999993611709 5.998779299956368 21.999999993611709 5.998779299956368 21.999999993611709 11.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999993611709" y1="1.998779299956368" x2="14.999999993611709" y2="1.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="21.999999993611709 18.998779299956368 18.999999993611709 21.998779299956368 15.999999993611709 18.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.999999993611709" y1="14.998779299956368" x2="18.999999993611709" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

PageViewOpenViewInNewTabArrowDown2.displayName = 'PageViewOpenViewInNewTabArrowDown2';

module.exports = PageViewOpenViewInNewTabArrowDown2;
module.exports.PageViewOpenViewInNewTabArrowDown2 = PageViewOpenViewInNewTabArrowDown2;
module.exports.default = PageViewOpenViewInNewTabArrowDown2;
