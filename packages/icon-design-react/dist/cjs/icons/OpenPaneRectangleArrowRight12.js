"use strict";

const { forwardRef } = require('react');

const OpenPaneRectangleArrowRight12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2" y="4.000000000716682" width="20" height="16" rx="2.0000000000003" ry="2.0000000000003" transform="translate(23.999999998922249 24.000000002511115) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999999999281499" y1="20.000000000357431" x2="8.000000000718501" y2="4.000000000357431" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000000000909" y1="12.000000001389708" x2="18.000000000000909" y2="12.000000000582077" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.000000000404725 15.000000000985892 18.000000000000909 12.000000000582077 14.999999999597094 9.000000000985892" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.00000000026921" y1="9.000000000357431" x2="1.99999999973079" y2="14.999999999819011" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.17968749938791" y1="18.820190429521972" x2="7.99999999990996" y2="13.000000000357431" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.99999999955071" y1="17.000000000357431" x2="4.999999999281499" y2="20.000000000088221" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000000628461" y1="5.000000000357431" x2="2.00000000009004" y2="10.999999999819011" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.000000000718501" y1="4.000000000088221" x2="2.00000000044929" y2="6.999999999819011" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

OpenPaneRectangleArrowRight12.displayName = 'OpenPaneRectangleArrowRight12';

module.exports = OpenPaneRectangleArrowRight12;
module.exports.OpenPaneRectangleArrowRight12 = OpenPaneRectangleArrowRight12;
module.exports.default = OpenPaneRectangleArrowRight12;
