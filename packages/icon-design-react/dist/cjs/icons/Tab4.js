"use strict";

const { forwardRef } = require('react');

const Tab4 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M19.525268532079281,21.99877930112325H3.525268532079281c-1.104569499659192,0-2-.895430500338989-2-2V3.99877930112325c0-1.104569499661011.895430500340808-2,2-2h2c.62951460666045,0,1.222291236001183.296388314665819,1.600000000000364.799999999999272l2.100000000000364,2.799999999999272c.1888543820005.251805842668546.485242696669957.400000000001455.799999999999272.400000000001455h9.5c1.104569499661011,0,2,.895430500338989,2,2v12c0,1.104569499661011-.895430500338989,2-2,2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.525268532079281,1.99877930112325h6c.62951460666045,0,1.222291236001183.296388314665819,1.600000000000364.799999999999272l2.399999999999636,3.200000000000728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.525268532079281,1.99877930112325h6c.62951460666045,0,1.222291236001183.296388314665819,1.600000000000364.799999999999272l1.800000000001091,2.400000000001455c.389466384398474.51928851253615.599999999998545,1.150889359324538.599999999998545,1.799999999999272v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Tab4.displayName = 'Tab4';

module.exports = Tab4;
module.exports.Tab4 = Tab4;
module.exports.default = Tab4;
