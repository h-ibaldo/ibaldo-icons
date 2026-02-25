"use strict";

const { forwardRef } = require('react');

const HandTouchOneFingerSwipeUpAndDownArrowUpAndDown2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M11.000060284899519,6.498579429236088c-.000060309248511,3.218230186976143-.000060308930188,10.500787778044469-.000060308930188,10.500787778044469l-2.961578310168989-2.96157828566993c-.573504559040884-.573504554294232-1.503339200729897-.57350445064003-2.076843624799949.000000234026629l-.000002000009772.000002000000677c-.542598678230206.542598680782248-.575983201881172,1.411467427325988-.076619312170806,1.994101411630254l5.114602697860391,5.967474640012369,10.000440549520135.000629356152785-.000000000340151-7.49202653109387c-.000000000040018-.892960718933864-.591954628720487-1.677732719381311-1.450557744290563-1.923047895219497l-5.549442255869508-1.585554929977661-.000228360429901-4.499592605916405c-.000042038200263-.828316850456758-.671537303651348-1.499778037446958-1.49985415518131-1.499778037410579h-.000002999559001c-.828336402149944.000000000037289-1.499838652700419.670246463418152-1.499854175630389,1.498582865420758Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="2.999999976200343 7.999996563433342 4.999999976200343 9.999996563433342 6.999999976200343 7.999996563433342" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.999999976200343 3.999996563433342 4.999999976200343 1.999996563433342 2.999999976200343 3.999996563433342" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.999999976200343" y1="1.999996563433342" x2="4.999999976200343" y2="9.999996563433342" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

HandTouchOneFingerSwipeUpAndDownArrowUpAndDown2.displayName = 'HandTouchOneFingerSwipeUpAndDownArrowUpAndDown2';

module.exports = HandTouchOneFingerSwipeUpAndDownArrowUpAndDown2;
module.exports.HandTouchOneFingerSwipeUpAndDownArrowUpAndDown2 = HandTouchOneFingerSwipeUpAndDownArrowUpAndDown2;
module.exports.default = HandTouchOneFingerSwipeUpAndDownArrowUpAndDown2;
