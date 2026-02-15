"use strict";

const { forwardRef } = require('react');

const MoveUpDownGrabber1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="21.000000004469257" y1="12.000000003885361" x2="3.000000004469257" y2="12.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.000000004469257" y1="8.000000003885361" x2="3.000000004469257" y2="8.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="10.000000004469257 4.000000003886271 12.000000004469257 2.000000003886271 14.000000004469257 4.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000004469257" y1="8.000000003885361" x2="12.000000004469257" y2="2.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.000000004469257" y1="16.000000003885361" x2="21.000000004469257" y2="16.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="14.000000004469257 20.000000003885361 12.000000004469257 22.000000003885361 10.000000004469257 20.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000004469257" y1="16.000000003885361" x2="12.000000004469257" y2="22.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MoveUpDownGrabber1.displayName = 'MoveUpDownGrabber1';

module.exports = MoveUpDownGrabber1;
module.exports.MoveUpDownGrabber1 = MoveUpDownGrabber1;
module.exports.default = MoveUpDownGrabber1;
