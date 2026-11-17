"use strict";

const { forwardRef } = require('react');

const HideSidepanelRight = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="17.050502324515037" y1="6.99756203627021" x2="19.050687067227045" y2="6.99756203591005" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.050502324686022" y1="9.99756203627021" x2="19.050687067385297" y2="9.99756203591005" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.050502324846093" y1="12.99756203627021" x2="19.050687067545368" y2="12.99756203591005" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.050537047700345" y="2.997627984182145" width="20" height="17.999993765783074" rx="1.999999999999558" ry="1.999999999999558" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.05053704693637" y1="2.997627983887469" x2="14.05053704846614" y2="20.997621749672362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.050502320205851" y1="11.997562037932767" x2="10.050502320205851" y2="11.997562037303396" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7.050502319936641 8.997562037572607 10.050502320205851 11.997562037303396 7.05050232047688 14.997562037572607" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

HideSidepanelRight.displayName = 'HideSidepanelRight';

module.exports = HideSidepanelRight;
module.exports.HideSidepanelRight = HideSidepanelRight;
module.exports.default = HideSidepanelRight;
