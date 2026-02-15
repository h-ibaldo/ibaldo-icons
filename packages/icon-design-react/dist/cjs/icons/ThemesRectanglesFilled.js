"use strict";

const { forwardRef } = require('react');

const ThemesRectanglesFilled = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="8.016630450970297" y="14.000000000480213" width="14" height="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.016630450970297 16.000000000480213 5.016630450970297 16.000000000480213 5.016630450970297 8.000000000480213 20.016630450970297 8.000000000480213 20.016630450970297 14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.016630450970297 10.000000000480213 2.016630450970297 10.000000000480213 2.016630450970297 2.000000000480213 17.016630450970297 2.000000000480213 17.016630450970297 8.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.006630450970079" y1="16.000000000480213" x2="13.016630450970297" y2="16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.006630450970079" y1="18.000000000480213" x2="12.016630450970297" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.006630450970079" y1="20.000000000480213" x2="13.016630450970297" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.006630450970079" y1="16.000000000480213" x2="10.016630450970297" y2="16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.006630450970079" y1="18.000000000480213" x2="9.016630450970297" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.006630450970079" y1="20.000000000480213" x2="10.016630450970297" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.006630450970079" y1="16.000000000480213" x2="16.016630450970297" y2="16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.006630450970079" y1="18.000000000480213" x2="15.016630450970297" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.006630450970079" y1="20.000000000480213" x2="16.016630450970297" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.006630450970079" y1="16.000000000480213" x2="19.016630450970297" y2="16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.006630450970079" y1="18.000000000480213" x2="18.016630450970297" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.006630450970079" y1="20.000000000480213" x2="19.016630450970297" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.006630450970079" y1="18.000000000480213" x2="21.016630450970297" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.016630450970297" y1="8.000000000480213" x2="17.016630450970297" y2="3.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.016630450970297" y1="8.000000000480213" x2="14.016630450970297" y2="2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.016630450970297" y1="10.000000000480213" x2="10.016630450970297" y2="2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.016630450970297" y1="6.000000000480213" x2="6.016630450970297" y2="2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ThemesRectanglesFilled.displayName = 'ThemesRectanglesFilled';

module.exports = ThemesRectanglesFilled;
module.exports.ThemesRectanglesFilled = ThemesRectanglesFilled;
module.exports.default = ThemesRectanglesFilled;
