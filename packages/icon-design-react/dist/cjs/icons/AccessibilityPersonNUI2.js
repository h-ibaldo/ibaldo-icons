"use strict";

const { forwardRef } = require('react');

const AccessibilityPersonNUI2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="12.025268549329667" cy="3.997565476096497" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.025268549329667" y1="13.997565476048294" x2="15.025268548970416" y2="13.997565476048294" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.025268548970416" y1="8.997565476096497" x2="9.025268549329667" y2="8.997565476096497" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="9.025268548970416" cy="20.997565476096952" r=".9999999999784" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="4.025268548947679" cy="12.997565476096952" r=".999999999977035" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.025268548970416 20.997565476121054 9.025268548970416 13.997565476096497 9.025268548970416 8.997565476096497 4.025268548970416 12.997565476121054" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="15.025268548969962" cy="20.997565476120144" r="1.000000000000682" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="20.025268548969962" cy="12.997565476120144" r="1.000000000000682" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.025268548970416 20.997565476121054 15.025268549279645 13.997565476255659 15.025268549059547 8.997565476255659 20.025268548970416 12.997565476121054" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AccessibilityPersonNUI2.displayName = 'AccessibilityPersonNUI2';

module.exports = AccessibilityPersonNUI2;
module.exports.AccessibilityPersonNUI2 = AccessibilityPersonNUI2;
module.exports.default = AccessibilityPersonNUI2;
