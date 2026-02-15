"use strict";

const { forwardRef } = require('react');

const ThemesSquaresFilled = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="10.016630450970297" y="11.000000000480213" width="11" height="11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="10.016630450970297 18.000000000480213 6.016630450970297 18.000000000480213 6.016630450970297 7.000000000480213 17.016630450970297 7.000000000480213 17.016630450970297 11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.016630450970297 13.000000000480213 2.016630450970297 13.000000000480213 2.016630450970297 2.000000000480213 13.016630450970297 2.000000000480213 13.016630450970297 7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.016630450970297" y1="13.000000000480213" x2="6.016630450970297" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.016630450970297" y1="9.000000000480213" x2="9.016630450970297" y2="2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.016630450970297" y1="5.000000000480213" x2="5.016630450970297" y2="2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.016630450970297" y1="7.000000000476575" x2="13.016630450970297" y2="2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.026630450969606" y1="16.000000000480213" x2="12.016630450970297" y2="16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.026630450969606" y1="18.000000000480213" x2="11.016630450970297" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.026630450969606" y1="20.000000000480213" x2="12.016630450970297" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.026630450969606" y1="12.000000000480213" x2="12.016630450970297" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.026630450969606" y1="14.000000000480213" x2="11.016630450970297" y2="14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.026630450969606" y1="16.000000000480213" x2="15.016630450970297" y2="16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.026630450969606" y1="18.000000000480213" x2="14.016630450970297" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.026630450969606" y1="20.000000000480213" x2="15.016630450970297" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.026630450969606" y1="12.000000000480213" x2="15.016630450970297" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.026630450969606" y1="14.000000000480213" x2="14.016630450970297" y2="14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.026630450969606" y1="16.000000000480213" x2="18.016630450970297" y2="16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.026630450969606" y1="18.000000000480213" x2="17.016630450970297" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.026630450969606" y1="20.000000000480213" x2="18.016630450970297" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.026630450969606" y1="12.000000000480213" x2="18.016630450970297" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.026630450969606" y1="14.000000000480213" x2="17.016630450970297" y2="14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.026630450969606" y1="18.000000000480213" x2="20.016630450970297" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.026630450969606" y1="14.000000000480213" x2="20.016630450970297" y2="14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ThemesSquaresFilled.displayName = 'ThemesSquaresFilled';

module.exports = ThemesSquaresFilled;
module.exports.ThemesSquaresFilled = ThemesSquaresFilled;
module.exports.default = ThemesSquaresFilled;
