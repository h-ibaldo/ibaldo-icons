"use strict";

const { forwardRef } = require('react');

const FunnelFilterMail = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="1.974731449505271" y1="5.000000000479304" x2="21.974731449505271" y2="5.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.974731449505271" y1="10.000000000480213" x2="18.974731449505271" y2="10.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.974731449505271" y1="15.000000000480213" x2="15.974731449505271" y2="15.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731449505271" y1="20.000000000480213" x2="12.974731449505271" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

FunnelFilterMail.displayName = 'FunnelFilterMail';

module.exports = FunnelFilterMail;
module.exports.FunnelFilterMail = FunnelFilterMail;
module.exports.default = FunnelFilterMail;
