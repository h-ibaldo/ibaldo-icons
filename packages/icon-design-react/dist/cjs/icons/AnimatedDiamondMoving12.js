"use strict";

const { forwardRef } = require('react');

const AnimatedDiamondMoving12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="16.999999981000656 2.999996564421963 11.999999981000656 11.999996564421963 16.999999981000656 20.999996564421963" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="11.999999981000656 2.999996564421963 6.999999981000656 11.999996564421963 11.999999981000656 20.999996564421963" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.999999981000656 2.999996564421963 1.999999981000656 11.999996564421963 6.999999981000656 20.999996564421963" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.999999981000656 20.999996564421963 21.999999981000656 11.999996564425601 16.999999981000656 2.999996564421963" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AnimatedDiamondMoving12.displayName = 'AnimatedDiamondMoving12';

module.exports = AnimatedDiamondMoving12;
module.exports.AnimatedDiamondMoving12 = AnimatedDiamondMoving12;
module.exports.default = AnimatedDiamondMoving12;
