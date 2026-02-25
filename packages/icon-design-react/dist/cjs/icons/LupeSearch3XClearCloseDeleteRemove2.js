"use strict";

const { forwardRef } = require('react');

const LupeSearch3XClearCloseDeleteRemove2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="9.000000018382707" cy="8.99877930438015" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.000000018382707" y1="21.99877930438015" x2="14.000000018382707" y2="13.99877930438015" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.000000018382707" y1="10.99877930438015" x2="11.000000018382707" y2="6.99877930438015" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.000000018202627" y1="10.998779304562049" x2="7.000000018562787" y2="6.998779304201889" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupeSearch3XClearCloseDeleteRemove2.displayName = 'LupeSearch3XClearCloseDeleteRemove2';

module.exports = LupeSearch3XClearCloseDeleteRemove2;
module.exports.LupeSearch3XClearCloseDeleteRemove2 = LupeSearch3XClearCloseDeleteRemove2;
module.exports.default = LupeSearch3XClearCloseDeleteRemove2;
