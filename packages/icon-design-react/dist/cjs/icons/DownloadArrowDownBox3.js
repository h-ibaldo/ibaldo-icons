"use strict";

const { forwardRef } = require('react');

const DownloadArrowDownBox3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="9.000000004989488 14.000000000193722 12.000000031399395 17.000000026769158 15.000000004989488 14.000000000732143" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000032030584" y1="10.000000000462933" x2="12.000000031399395" y2="17.000000026769158" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.000000005029506,2.000000000459295c0,1.6568603515625-1.343139648430224,3-3,3-1.656860351558862,0-3-1.3431396484375-3-3H3.000000005029506c-.552284749830505,0-1,.447715250171314-1,1v18c0,.552284749832324.447715250169495,1,1,1h18c.552284749841419,0,1-.447715250167676,1-1V3.000000000459295c0-.552284749828686-.447715250158581-1-1-1h-6Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DownloadArrowDownBox3.displayName = 'DownloadArrowDownBox3';

module.exports = DownloadArrowDownBox3;
module.exports.DownloadArrowDownBox3 = DownloadArrowDownBox3;
module.exports.default = DownloadArrowDownBox3;
