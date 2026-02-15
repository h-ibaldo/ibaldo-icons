"use strict";

const { forwardRef } = require('react');

const CapsLockOnArrowUp1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="20.999999977100742 9.999996563434252 11.999999977100742 1.999996563434252 2.999999977100742 9.999996563434252 7.999999977100742 9.999996563434252 7.999999977100742 14.999996563434252 15.999999977100742 14.999996563434252 15.999999977100742 9.999996563434252 20.999999977100742 9.999996563434252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="7.999999977100742" y="18.999996563434252" width="8" height="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CapsLockOnArrowUp1.displayName = 'CapsLockOnArrowUp1';

module.exports = CapsLockOnArrowUp1;
module.exports.CapsLockOnArrowUp1 = CapsLockOnArrowUp1;
module.exports.default = CapsLockOnArrowUp1;
