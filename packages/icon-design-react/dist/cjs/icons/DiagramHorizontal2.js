"use strict";

const { forwardRef } = require('react');

const DiagramHorizontal2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.949462885142566" y="10.000000000480213" width="6" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="15.949462885142566" y="4.000000000480213" width="6" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="15.949462885142566" y="16.000000000480213" width="6" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.949462885142566" y1="12.000000000480213" x2="7.949462885142566" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.949462885142566,6.000000000480213h-2.279240779942484c-.430430408074244,0-.812569251680543.27543009486908-.948683298051037.683772233980562l-1.772075922006479,5.316227766019438" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.949462885142566,18.000000000480213h-2.279240779942484c-.430430408074244,0-.812569251680543-.27543009486908-.948683298051037-.683772233980562l-1.772075922006479-5.316227766019438" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DiagramHorizontal2.displayName = 'DiagramHorizontal2';

module.exports = DiagramHorizontal2;
module.exports.DiagramHorizontal2 = DiagramHorizontal2;
module.exports.default = DiagramHorizontal2;
