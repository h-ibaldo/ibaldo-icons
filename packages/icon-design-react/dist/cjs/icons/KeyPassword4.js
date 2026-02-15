"use strict";

const { forwardRef } = require('react');

const KeyPassword4 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="3.000019575949409" y1="9.000015258789062" x2="6.000019575949409" y2="6.000015258789062" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.000019575949409,15.964491283668394l2.964476024890246-2.928952049771397c1.380698633480279-1.38069863347846,3.619253416280117-1.38069863347846,4.999952049771309,0l.000047950228691.00004795023051c1.380698633480279,1.380698633489374,1.380698633480279,3.619253416291031,0,4.99995204976949l-2.964476024890246,2.928952049771397c-1.380698633489374,1.380698633489374-3.619253416280117,1.380698633489374-4.99995204976949,0l-.00004795023051-.00004795023051c-1.380698633489374-1.380698633480279-1.380698633489374-3.619253416280117,0-4.99995204976949Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.491230513449409" y1="14.491165161129175" x2="3.000019575949409" y2="3.000015258789062" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

KeyPassword4.displayName = 'KeyPassword4';

module.exports = KeyPassword4;
module.exports.KeyPassword4 = KeyPassword4;
module.exports.default = KeyPassword4;
