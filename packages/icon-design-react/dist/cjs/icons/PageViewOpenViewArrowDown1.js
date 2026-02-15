"use strict";

const { forwardRef } = require('react');

const PageViewOpenViewArrowDown1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M12.99999999360989,21.998779299956368H3.999999993589881c-1.104569499660101,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500339899-2,2-2h16c1.104569499660101,0,2,.895430500338989,2,2v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993589881" y1="7.998779299956368" x2="21.999999993589881" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="21.999999993599886 18.998779299956368 18.99999999360989 21.998779299956368 15.99999999360989 18.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.999999993599886" y1="14.998779299956368" x2="18.99999999360989" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.99999999360989" y1="12.998779299956368" x2="14.99999999360989" y2="12.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.99999999360989" y1="16.998779299956368" x2="11.99999999360989" y2="16.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.009999993640122" y1="4.998779299956368" x2="4.999999993639904" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.009999993640122" y1="4.998779299956368" x2="7.999999993639904" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.009999993640122" y1="4.998779299956368" x2="10.999999993639904" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

PageViewOpenViewArrowDown1.displayName = 'PageViewOpenViewArrowDown1';

module.exports = PageViewOpenViewArrowDown1;
module.exports.PageViewOpenViewArrowDown1 = PageViewOpenViewArrowDown1;
module.exports.default = PageViewOpenViewArrowDown1;
