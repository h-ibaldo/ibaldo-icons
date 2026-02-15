"use strict";

const { forwardRef } = require('react');

const ToolbarNavigationPane1 = forwardRef(({
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
  <polygon points="10.050537043445729 15.997562036226554 6.050537043445729 11.997562036226554 10.050537043445729 7.997562036226554 10.050537043445729 15.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="14.050537043576696 15.997562036292038 18.050537043445729 11.997562036157433 14.050537043305667 7.997562036292038 14.050537043576696 15.997562036292038" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ToolbarNavigationPane1.displayName = 'ToolbarNavigationPane1';

module.exports = ToolbarNavigationPane1;
module.exports.ToolbarNavigationPane1 = ToolbarNavigationPane1;
module.exports.default = ToolbarNavigationPane1;
