"use strict";

const { forwardRef } = require('react');

const ToolbarNavigationBottom2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.050537047695798" y="2.997697235746273" width="20" height="17.999864816290938" rx=".999999999999596" ry=".999999999999596" transform="translate(24.101074094785382 23.995259288392372) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.050537039165647" y1="14.997562036226554" x2="22.050537039165647" y2="14.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.050537039165647" y1="17.997562036226554" x2="19.050537039165647" y2="17.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.060537039165865" y1="17.997562036226554" x2="5.050537039165647" y2="17.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.060537039165865" y1="17.997562036226554" x2="8.050537039165647" y2="17.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ToolbarNavigationBottom2.displayName = 'ToolbarNavigationBottom2';

module.exports = ToolbarNavigationBottom2;
module.exports.ToolbarNavigationBottom2 = ToolbarNavigationBottom2;
module.exports.default = ToolbarNavigationBottom2;
