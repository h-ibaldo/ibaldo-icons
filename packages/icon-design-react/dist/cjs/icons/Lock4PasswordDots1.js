"use strict";

const { forwardRef } = require('react');

const Lock4PasswordDots1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="3.949462885142566" y="12.000000000480213" width="16.000000000001819" height="10" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.949462885144385,12.000000000480213v-5.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999994999999217-4.999994999998307h-.000010000001566c-2.761420987729252,0-4.999994999999217,2.238574012269964-4.999994999999217,4.999994999998307v5.000005000001693" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.949462885142566" y1="16.990000000479995" x2="7.949462885142566" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462885142566" y1="16.990000000479995" x2="11.949462885142566" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.949462885142566" y1="16.990000000479995" x2="15.949462885142566" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Lock4PasswordDots1.displayName = 'Lock4PasswordDots1';

module.exports = Lock4PasswordDots1;
module.exports.Lock4PasswordDots1 = Lock4PasswordDots1;
module.exports.default = Lock4PasswordDots1;
