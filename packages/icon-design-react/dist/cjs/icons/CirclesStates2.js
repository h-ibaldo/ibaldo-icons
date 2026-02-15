"use strict";

const { forwardRef } = require('react');

const CirclesStates2 = forwardRef(({
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
    viewBox: "0 0 24 24.000000000000909",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="8.999999976489562" cy="14.998779299956368" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.214172339779907,15.212951663237618c2.247497558590112-1.1649169921875,3.785827636709655-3.5079345703125,3.785827636709655-6.21417236328125,0-3.865966796875-3.134033203119543-7-7-7-2.706237792959655,0-5.049255371090112,1.538330078125-6.214172363279431,3.78582763671875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.214172339779907,18.212951663237618c2.247497558590112-1.1649169921875,3.785827636709655-3.5079345703125,3.785827636709655-6.21417236328125,0-3.865966796875-3.134033203119543-7-7-7-2.706237792959655,0-5.049255371090112,1.538330078125-6.214172363279431,3.78582763671875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CirclesStates2.displayName = 'CirclesStates2';

module.exports = CirclesStates2;
module.exports.CirclesStates2 = CirclesStates2;
module.exports.default = CirclesStates2;
