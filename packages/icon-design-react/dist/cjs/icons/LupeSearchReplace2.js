"use strict";

const { forwardRef } = require('react');

const LupeSearchReplace2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="15.656860356559264" y1="15.65686035545059" x2="22.000000005000402" y2="22.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.000000005000402 14.00000000352793 6.000000004729372 17.00000000352793 3.000000004729372 17.000000003256901" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.000000005000402,3.76043701560593c-1.827270507810681,1.4661865234375-3,3.7144775390625-3,6.239562988280341.00000000008913,2.959411620376159,1.611083984238576,5.537170409584178,3.999999999748979,6.92102050745325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000005029506" y1="2.000000003866262" x2="8.000000005029506" y2="2.000000003866262" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="14.000000005360562 6.000000003886271 14.000000005900802 3.000000003886271 17.000000005900802 3.00000000442742" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.000000004440153,16.23956299189831c1.827270507939829-1.466186523272881,3.000000000329237-3.71447753879238,3.000000000560249-6.23956298801204.000000000169166-2.95941162037434-1.611083983731078-5.537170409726969-3.999999999119609-6.921020507810681" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000004280082" y1="18.000000003348759" x2="12.000000004280082" y2="18.000000003348759" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupeSearchReplace2.displayName = 'LupeSearchReplace2';

module.exports = LupeSearchReplace2;
module.exports.LupeSearchReplace2 = LupeSearchReplace2;
module.exports.default = LupeSearchReplace2;
