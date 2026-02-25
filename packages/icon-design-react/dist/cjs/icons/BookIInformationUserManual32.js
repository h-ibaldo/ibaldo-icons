"use strict";

const { forwardRef } = require('react');

const BookIInformationUserManual32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="4" y="2" width="16" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4,20v-.000002000000677c0-1.10456838878963.895429604909623-1.999997999999323,1.999997999999323-1.999997999999323h12.000004000001354c1.104568395099705,0,1.999997999999323-.895429611209693,1.999997999999323-1.999997999999323v-.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="6.989999999999782" x2="12" y2="7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="13" x2="12" y2="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BookIInformationUserManual32.displayName = 'BookIInformationUserManual32';

module.exports = BookIInformationUserManual32;
module.exports.BookIInformationUserManual32 = BookIInformationUserManual32;
module.exports.default = BookIInformationUserManual32;
