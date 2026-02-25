"use strict";

const { forwardRef } = require('react');

const AnimatedCircleMoving22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="16.999999981000656" cy="11.999996563432433" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.999999981000656,7.430660625932433c-1.762451171871362.77288818359375-3,2.52154541015625-3,4.5693359375s1.237548828128638,3.79644775390625,3,4.5693359375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.009999981000874" y1="7.430660625932433" x2="4.999999981000656" y2="7.430660625932433" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.009999981000874" y1="16.569332500932433" x2="4.999999981000656" y2="16.569332500932433" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.009999981000874" y1="11.999996563432433" x2="1.999999981000656" y2="11.999996563432433" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.830660490519222" y1="9.267991786638959" x2="2.820660490520822" y2="9.267991786638959" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.830660490519222" y1="14.732001340225906" x2="2.820660490520822" y2="14.732001340225906" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AnimatedCircleMoving22.displayName = 'AnimatedCircleMoving22';

module.exports = AnimatedCircleMoving22;
module.exports.AnimatedCircleMoving22 = AnimatedCircleMoving22;
module.exports.default = AnimatedCircleMoving22;
