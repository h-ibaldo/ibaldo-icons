"use strict";

const { forwardRef } = require('react');

const AnimatedCircleMoving12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="16.999999980989742" cy="11.997562035418014" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.999999980989742,7.428226097918014c-1.762451171869543.77288818359375-3,2.52154541015625-3,4.5693359375s1.237548828130457,3.79644775390625,3,4.5693359375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.999999980989742,7.428226097918014c-1.762451171869543.77288818359375-3,2.52154541015625-3,4.5693359375s1.237548828130457,3.79644775390625,3,4.5693359375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AnimatedCircleMoving12.displayName = 'AnimatedCircleMoving12';

module.exports = AnimatedCircleMoving12;
module.exports.AnimatedCircleMoving12 = AnimatedCircleMoving12;
module.exports.default = AnimatedCircleMoving12;
