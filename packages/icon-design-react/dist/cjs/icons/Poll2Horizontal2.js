"use strict";

const { forwardRef } = require('react');

const Poll2Horizontal2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="17.99999999981992" y1="5.99999999981992" x2="21.99999999981992" y2="1.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.989999999819702" y1="1.99999999981992" x2="17.99999999981992" y2="1.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.989999999819702" y1="5.99999999981992" x2="21.99999999981992" y2="5.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.99999999981992" y1="13.99999999981992" x2="13.99999999981992" y2="9.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.989999999819702" y1="9.99999999981992" x2="9.99999999981992" y2="9.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.989999999819702" y1="13.99999999981992" x2="13.99999999981992" y2="13.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.99999999981992" y1="21.99999999981992" x2="17.99999999981992" y2="17.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.989999999819702" y1="17.99999999981992" x2="13.99999999981992" y2="17.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.989999999819702" y1="21.99999999981992" x2="17.99999999981992" y2="21.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.99999999981992 1.99999999981992 13.99999999981992 1.99999999981992 13.99999999981992 5.99999999981992 1.99999999981992 5.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.99999999981992 9.99999999981992 5.99999999981992 9.99999999981992 5.99999999981992 13.99999999981992 1.99999999981992 13.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.99999999981992 17.99999999981992 9.99999999981992 17.99999999981992 9.99999999981992 21.99999999981992 1.99999999981992 21.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Poll2Horizontal2.displayName = 'Poll2Horizontal2';

module.exports = Poll2Horizontal2;
module.exports.Poll2Horizontal2 = Poll2Horizontal2;
module.exports.default = Poll2Horizontal2;
