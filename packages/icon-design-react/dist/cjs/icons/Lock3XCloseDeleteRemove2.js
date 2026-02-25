"use strict";

const { forwardRef } = require('react');

const Lock3XCloseDeleteRemove2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="5.025268564680118" y="10.000000000709406" width="14" height="12" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.025268564680118,10.000000000709406v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999995000000126-4.999994999998307h-.000009999999747c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999994999998307v3.000005000001693" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.02526856482018" y1="18.000000005555194" x2="14.025268564540056" y2="14.000000000709406" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.025268564680118" y1="14.000000000884029" x2="14.025268564680118" y2="18.000000005373295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Lock3XCloseDeleteRemove2.displayName = 'Lock3XCloseDeleteRemove2';

module.exports = Lock3XCloseDeleteRemove2;
module.exports.Lock3XCloseDeleteRemove2 = Lock3XCloseDeleteRemove2;
module.exports.default = Lock3XCloseDeleteRemove2;
