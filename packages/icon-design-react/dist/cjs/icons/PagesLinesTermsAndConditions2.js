"use strict";

const { forwardRef } = require('react');

const PagesLinesTermsAndConditions2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="7" y="6" width="14" height="16" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16,2H4c-.552284749830505,0-1,.447715250171314-1,1v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11" y1="10" x2="17" y2="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11" y1="14" x2="17" y2="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11" y1="18" x2="17" y2="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

PagesLinesTermsAndConditions2.displayName = 'PagesLinesTermsAndConditions2';

module.exports = PagesLinesTermsAndConditions2;
module.exports.PagesLinesTermsAndConditions2 = PagesLinesTermsAndConditions2;
module.exports.default = PagesLinesTermsAndConditions2;
