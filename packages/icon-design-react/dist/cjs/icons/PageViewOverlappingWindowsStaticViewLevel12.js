"use strict";

const { forwardRef } = require('react');

const PageViewOverlappingWindowsStaticViewLevel12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<g>
  <rect x="1.999999993622623" y="1.998779299956368" width="13.000000000009095" height="13" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993622623" y1="5.998779299956368" x2="14.999999993642632" y2="5.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <g>
  <path d="M17.999999993631718,8.998779299956368h2.000000000010914c1.104569499659192,0,2,.895430500335351,2,1.999999999996362v9.000000000003638c0,1.104569499661011-.895430500340808,2-2,2h-9.000000000010914c-1.104569499660101,0-2-.895430500338989-2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.999999993631718" y1="12.998779299956368" x2="21.999999993651727" y2="12.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <line x1="3.009999993631936" y1="2.998779299956368" x2="2.999999993631718" y2="2.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.009999993631936" y1="2.998779299956368" x2="5.999999993631718" y2="2.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.009999993631936" y1="2.998779299956368" x2="8.999999993631718" y2="2.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.009999993631936" y1="2.998779299956368" x2="11.999999993631718" y2="2.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.009999993631936" y1="4.998779299956368" x2="4.999999993631718" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.009999993631936" y1="4.998779299956368" x2="7.999999993631718" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.009999993631936" y1="4.998779299956368" x2="10.999999993631718" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.009999993631936" y1="4.998779299956368" x2="13.999999993631718" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

PageViewOverlappingWindowsStaticViewLevel12.displayName = 'PageViewOverlappingWindowsStaticViewLevel12';

module.exports = PageViewOverlappingWindowsStaticViewLevel12;
module.exports.PageViewOverlappingWindowsStaticViewLevel12 = PageViewOverlappingWindowsStaticViewLevel12;
module.exports.default = PageViewOverlappingWindowsStaticViewLevel12;
