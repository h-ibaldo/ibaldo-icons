"use strict";

const { forwardRef } = require('react');

const DesktopDownload22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M16.974731450033687,5.000000000459295h3c1.104569499661011,0,2,.895430500336261,2,2v12.999999999999091c0,1.10456949966192-.895430500338989,2-2,2H3.974731450033687c-1.104569499661011,0-2-.89543050033808-2-2V7.000000000459295c0-1.104569499663739.895430500338989-2.000000000002728,2-2l3,.000000000002728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="14.974731450033687 9.000000000459295 11.974731449360661 12.000000000459295 8.974731450033687 9.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731450033687" y1="2.000000000459295" x2="11.974731449360661" y2="12.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="5.974731450033687" y="17.000000000459295" width="2" height="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="10.974731450033687" y="17.000000000459295" width="2" height="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="15.974731450033687" y="17.000000000459295" width="2" height="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DesktopDownload22.displayName = 'DesktopDownload22';

module.exports = DesktopDownload22;
module.exports.DesktopDownload22 = DesktopDownload22;
module.exports.default = DesktopDownload22;
