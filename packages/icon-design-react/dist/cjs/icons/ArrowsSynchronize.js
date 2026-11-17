"use strict";

const { forwardRef } = require('react');

const ArrowsSynchronize = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="10.99999999963984 1.999999999998181 12.99999999963984 3.999999999998181 10.99999999963984 5.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="3.99999999963984" cy="11.999999999278316" r="1.999999999640067" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.24957275318593,13.974853515617724c.458251953125,1.803466796880457,1.525634765625,3.364013671880457,2.974609375,4.44384765625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.99999999927968,3.999999999998181c-3.73565673828125,0-6.864013671875,2.56396484375-7.744384765625,6.025756835940228" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12.99999999963984 21.999999999998181 10.99999999963984 19.999999999998181 12.99999999963984 17.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="19.99999999963984" cy="12.000000000718501" r="1.99999999963984" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.75042724609375,10.025146484367724c-.458251953125-1.803466796869543-1.525634765625-3.364013671869543-2.974609375-4.44384765625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12,19.999999999998181c3.73565673828125,0,6.864013671875-2.56396484375,7.744384765625-6.025756835939319" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ArrowsSynchronize.displayName = 'ArrowsSynchronize';

module.exports = ArrowsSynchronize;
module.exports.ArrowsSynchronize = ArrowsSynchronize;
module.exports.default = ArrowsSynchronize;
