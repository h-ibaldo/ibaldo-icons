"use strict";

const { forwardRef } = require('react');

const BriefcasePlus = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2" y="6.999999999998181" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8,20.999999999998181c-1.104569499661011,0-2-.895430500340808-2-2v-10.000001999998858c0-1.10456839509061-.895429611206055-1.999998000001142-1.999997999999323-1.999998000001142h-.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10,6.999999999998181v-3c0-.552284749830505.447715250168585-1,1-1h4c.552284749829596,0,1,.447715250169495,1,1v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6" y1="15.999999999998181" x2="22" y2="15.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BriefcasePlus.displayName = 'BriefcasePlus';

module.exports = BriefcasePlus;
module.exports.BriefcasePlus = BriefcasePlus;
module.exports.default = BriefcasePlus;
