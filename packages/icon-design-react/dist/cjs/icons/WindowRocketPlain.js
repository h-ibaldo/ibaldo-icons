'use strict';

const { createElement, forwardRef } = require('react');

const WindowRocketPlain = forwardRef(function WindowRocketPlain(
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
    createElement('path', {"d":"M5.999999993649908,21.998779299956368h-1c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249500611,0,3,1.343145750506665,3,3v14c0,1.656854249489697-1.343145750499389,3-3,3h-1","key":"0"}),
    createElement('line', {"x1":"1.999999993649908","y1":"7.998779299956368","x2":"21.999999993649908","y2":"7.998779299956368","key":"1"}),
    createElement('polygon', {"points":"10.999999993649908 18.998779299956368 11.999999993649908 21.998779299865419 12.999999993739948 18.998779299956368 10.999999993649908 18.998779299956368","key":"2"}),
    createElement('path', {"d":"M15.999999993819984,18.998779299956368l-1.999999999849933-3,.000000000030013-1.757359312890912c.000000000010004-.795649469484488-.316070521050278-1.558711208155728-.878679656339955-2.121320343500884l-1.121320343519983-1.121320343608204-1.121320343830121,1.121320343612751c-.562609135489765.562609135358798-.878679656660097,1.325670874150092-.878679656660097,2.121320343772823v1.757359312614426l-2,2.999999999909051,4.00000000009004-.999999999956344,4.000000000080036,1.000000000047294Z","key":"3"})
  );
});

WindowRocketPlain.displayName = 'WindowRocketPlain';

module.exports = WindowRocketPlain;
module.exports.WindowRocketPlain = WindowRocketPlain;
module.exports.default = WindowRocketPlain;
