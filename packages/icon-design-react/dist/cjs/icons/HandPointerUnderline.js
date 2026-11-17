'use strict';

const { createElement, forwardRef } = require('react');

const HandPointerUnderline = forwardRef(function HandPointerUnderline(
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
    createElement('path', {"d":"M20,17.999999999998181v-6c0-1.656854249489697-1.343145750510303-3-3-3h-4V3.999997999999323c0-1.10456839509061-.895429604910532-1.999998000001142-1.999997999999323-1.999998000001142h-.000004000001354c-1.104568422299053,0-1.99999804780964.895429629739738-1.999998042580046,1.999998052038791l.000000042580723,9.000001947961209-3.462931555310206-2.110380517649901c-.846352805780043-.515784514889674-1.948779766209555-.272052688289477-2.49856194503991.552620758289777l-.025824900829321.038737359711376c-.573642123250465.860463371178412-.359256323021327,2.010119038828634.478227311568844,2.60128989867917,2.064316729940401,1.457179395298226,5.509091089610592,3.917732500969578,5.509091089610592,3.917732500969578","key":"0"}),
    createElement('line', {"x1":"9","y1":"21.999999999998181","x2":"20","y2":"21.999999999998181","key":"1"})
  );
});

HandPointerUnderline.displayName = 'HandPointerUnderline';

module.exports = HandPointerUnderline;
module.exports.HandPointerUnderline = HandPointerUnderline;
module.exports.default = HandPointerUnderline;
