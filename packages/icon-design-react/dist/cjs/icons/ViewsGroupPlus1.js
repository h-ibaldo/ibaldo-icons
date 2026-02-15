"use strict";

const { forwardRef } = require('react');

const ViewsGroupPlus1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M9.999999993639904,21.997565472713177h-1c-1.104569499660101,0-2-.895430500338989-2-2v-11c0-1.104569499661011.895430500339899-2,2-2h11c1.104569499660101,0,2,.895430500338989,2,2v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.999999993639904" cy="16.997565472713177" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <line x1="16.999999993639904" y1="14.997565472713177" x2="16.999999993639904" y2="18.997565472713177" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="18.999999993639904" y1="16.997565472622227" x2="14.999999993639904" y2="16.997565472801398" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M6.999999993639904,16.997565472713177h-3c-1.104569499660101,0-2-.895430500338989-2-2V3.997565472713177c0-1.104569499661011.895430500339899-2,2-2h11c1.104569499660101,0,2,.895430500338989,2,2v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ViewsGroupPlus1.displayName = 'ViewsGroupPlus1';

module.exports = ViewsGroupPlus1;
module.exports.ViewsGroupPlus1 = ViewsGroupPlus1;
module.exports.default = ViewsGroupPlus1;
