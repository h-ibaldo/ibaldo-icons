"use strict";

const { forwardRef } = require('react');

const WindowAdvertisementArrowIn12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M2.000000004900357,15.999999995256076V3.999999995616236c0-1.104569499661011.895430500329894-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500340808,2-2,2h-12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000004900357" y1="7.999999995616236" x2="22.000000004900357" y2="7.999999995616236" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000004900576" y1="4.999999995616236" x2="5.000000004900357" y2="4.999999995616236" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000004900576" y1="4.999999995616236" x2="8.000000004900357" y2="4.999999995616236" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000004900576" y1="4.999999995616236" x2="11.000000004900357" y2="4.999999995616236" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="11.000000004900357 17.999999995256076 11.000000004900357 12.999999995256076 6.000000004900357 12.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.000000004900357" y1="12.999999995256076" x2="2.000000004900357" y2="21.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WindowAdvertisementArrowIn12.displayName = 'WindowAdvertisementArrowIn12';

module.exports = WindowAdvertisementArrowIn12;
module.exports.WindowAdvertisementArrowIn12 = WindowAdvertisementArrowIn12;
module.exports.default = WindowAdvertisementArrowIn12;
