"use strict";

const { forwardRef } = require('react');

const ToolbarMoreDetails = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="6.050537043445729" y1="5.997562036495765" x2="6.04053704344642" y2="5.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.050537043445729" y1="5.997562036495765" x2="9.050537043445729" y2="5.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.050537043445729" y1="5.997562036495765" x2="14.04053704344642" y2="5.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.050537043445729" y1="5.997562036495765" x2="17.050537043445729" y2="5.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.04053704344642" y1="9.997562036495765" x2="6.050537043445729" y2="9.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.050537043445729" y1="9.997562036495765" x2="9.050537043445729" y2="9.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.050537043445729" y1="9.997562036495765" x2="14.04053704344642" y2="9.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.050537043445729" y1="9.997562036495765" x2="17.050537043445729" y2="9.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.04053704344642" y1="13.997562036495765" x2="6.050537043445729" y2="13.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.050537043445729" y1="13.997562036495765" x2="9.050537043445729" y2="13.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.050537043445729" y1="13.997562036495765" x2="14.04053704344642" y2="13.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.050537043445729" y1="13.997562036495765" x2="17.050537043445729" y2="13.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.04053704344642" y1="17.997562036495765" x2="6.050537043445729" y2="17.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.050537043445729" y1="17.997562036495765" x2="9.050537043445729" y2="17.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.04053704344642" y1="17.997562036495765" x2="14.050537043445729" y2="17.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.050537043445729" y1="17.997562036495765" x2="17.050537043445729" y2="17.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.050502318321378" y="1.997562039977311" width="20" height="19.999999992898665" rx="1.999999999997544" ry="1.999999999997544" transform="translate(24.101004636069892 23.995124073428677) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ToolbarMoreDetails.displayName = 'ToolbarMoreDetails';

module.exports = ToolbarMoreDetails;
module.exports.ToolbarMoreDetails = ToolbarMoreDetails;
module.exports.default = ToolbarMoreDetails;
