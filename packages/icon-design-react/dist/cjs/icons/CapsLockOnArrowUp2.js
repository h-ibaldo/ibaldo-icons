"use strict";

const { forwardRef } = require('react');

const CapsLockOnArrowUp2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="21.999999977100742 12.999996563434252 11.999999977100742 1.999996563434252 1.999999977100742 12.999996563434252 6.999999977100742 12.999996563434252 6.999999977100742 17.999996563434252 16.999999977100742 17.999996563434252 16.999999977100742 12.999996563434252 21.999999977100742 12.999996563434252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.999999977100742" y1="21.999996563434252" x2="16.999999977100742" y2="21.999996563434252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CapsLockOnArrowUp2.displayName = 'CapsLockOnArrowUp2';

module.exports = CapsLockOnArrowUp2;
module.exports.CapsLockOnArrowUp2 = CapsLockOnArrowUp2;
module.exports.default = CapsLockOnArrowUp2;
