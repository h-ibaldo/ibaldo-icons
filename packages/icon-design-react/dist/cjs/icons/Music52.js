"use strict";

const { forwardRef } = require('react');

const Music52 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<ellipse cx="7" cy="18.499999999998181" rx="4" ry="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11,6.999999999998181h2.197226165038956c1.175499458480772,0,2.324697664540508.347949219720249,3.302772334960537.999998999999661l.000003000001016.000002000000677c.978074670418209.652049780279413,2.127272876479765.999998999999661,3.302772334960537.999998999999661h2.197226165038956V3.999999999998181h-2.197226165038956c-1.175499458480772,0-2.324697664542327-.347949219720249-3.302772334960537-.999998999999661l-.000003000001016-.000002000000677c-.978074670420028-.652049780279413-2.127272876479765-.999998999999661-3.302772334949623-.999998999999661h-2.197226165049869v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Music52.displayName = 'Music52';

module.exports = Music52;
module.exports.Music52 = Music52;
module.exports.default = Music52;
