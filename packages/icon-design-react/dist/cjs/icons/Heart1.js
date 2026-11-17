'use strict';

const { createElement, forwardRef } = require('react');

const Heart1 = forwardRef(function Heart1(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M20.475006104339627,5.500000005168658c-1.932983398450233-1.932983398434772-5.067016601569776-1.932983398434772-7,0l-1.5,1.5-1.5-1.5c-1.932983398450233-1.932983398434772-5.067016601569776-1.932983398434772-7,0-1.932983398450233,1.932983398440228-1.932983398450233,5.067016601565228,0,7l8.5,8.5,8.5-8.5c1.932983398430224-1.932983398434772,1.932983398430224-5.067016601559772,0-7Z","key":"0"})
  );
});

Heart1.displayName = 'Heart1';

module.exports = Heart1;
module.exports.Heart1 = Heart1;
module.exports.default = Heart1;
