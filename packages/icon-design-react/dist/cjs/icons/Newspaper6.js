'use strict';

const { createElement, forwardRef } = require('react');

const Newspaper6 = forwardRef(function Newspaper6(
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
    createElement('path', {"d":"M17.999988017745636,17.936828613277612V1.936828613277612H6.828415142495942c-.530432979679972,0-1.039140805480201.210713680731715-1.41421356238061.585786437630304l-2.828427124739392,2.828427124739392c-.375072756900408.375072756902227-.585786437630304.883780582700638-.585786437630304,1.41421356238061v12.171572875249694c0,1.656854249489697,1.343145750510303,3,3,3h14c1.656854249489697,0,3-1.343145750510303,3-3V6.936828613277612","key":"0"}),
    createElement('line', {"x1":"10.999988017745636","y1":"5.936828613277612","x2":"13.999988017745636","y2":"5.936828613277612","key":"1"}),
    createElement('line', {"x1":"5.999988017745636","y1":"13.936828613277612","x2":"13.999988017745636","y2":"13.936828613277612","key":"2"}),
    createElement('line', {"x1":"5.999988017745636","y1":"17.936828613277612","x2":"13.999988017745636","y2":"17.936828613277612","key":"3"}),
    createElement('line', {"x1":"5.999988017745636","y1":"9.936828613277612","x2":"13.999988017745636","y2":"9.936828613277612","key":"4"}),
    createElement('polyline', {"points":"6.999988017745636 1.936828613277612 6.999988017745636 6.936828613277612 1.999988017745636 6.936828613277612","key":"5"})
  );
});

Newspaper6.displayName = 'Newspaper6';

module.exports = Newspaper6;
module.exports.Newspaper6 = Newspaper6;
module.exports.default = Newspaper6;
