"use strict";

const { forwardRef } = require('react');

const ApplicationWindow1LupeSearch = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M10.000000000187356,21.92321777388679h-6.000000000003638c-1.104569499661011,0-2-.895430500338989-2-2V3.92321777388679c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499661011,0,2,.895430500338989,2,2v9.076782226561591" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000183718" y1="7.92321777388679" x2="22.000000000183718" y2="7.92321777388679" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="15.000000000186446" cy="16.000000000449745" r="4.000000000002046" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.000000000183718" y1="22.000000000448381" x2="17.786376953312356" y2="18.8631591801377" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000183936" y1="5.000000000448381" x2="5.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000183936" y1="5.000000000448381" x2="8.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000183936" y1="5.000000000448381" x2="11.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow1LupeSearch.displayName = 'ApplicationWindow1LupeSearch';

module.exports = ApplicationWindow1LupeSearch;
module.exports.ApplicationWindow1LupeSearch = ApplicationWindow1LupeSearch;
module.exports.default = ApplicationWindow1LupeSearch;
