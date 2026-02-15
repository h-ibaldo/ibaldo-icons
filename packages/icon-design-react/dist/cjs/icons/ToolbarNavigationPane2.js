"use strict";

const { forwardRef } = require('react');

const ToolbarNavigationPane2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.050537039341634" y="2.99756204273308" width="20" height="18.000000000400178" rx="1.999999999994095" ry="1.999999999994095" transform="translate(24.101074078167692 23.995124086384191) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.050537043445729 14.997562036226554 6.050537043445729 11.997562036226554 9.050537043445729 8.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.050537043445729 14.997562036226554 18.050537043445729 11.997562036157433 15.050537043445729 8.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ToolbarNavigationPane2.displayName = 'ToolbarNavigationPane2';

module.exports = ToolbarNavigationPane2;
module.exports.ToolbarNavigationPane2 = ToolbarNavigationPane2;
module.exports.default = ToolbarNavigationPane2;
