"use strict";

const { forwardRef } = require('react');

const BriefcaseDocument = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2" y="6.999999999998181" width="20" height="14" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.999999999989086,2.999999999998181h6.000000000010914c.551915024494001,0,1,.448084975506,1,1v3H7.999999999989086v-3c0-.551915024494.448084975505999-1,1-1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7" y1="9.999999999998181" x2="7" y2="17.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17" y1="9.999999999998181" x2="17" y2="17.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BriefcaseDocument.displayName = 'BriefcaseDocument';

module.exports = BriefcaseDocument;
module.exports.BriefcaseDocument = BriefcaseDocument;
module.exports.default = BriefcaseDocument;
