import { createElement, forwardRef } from 'react';

const AtEqualTall = forwardRef(function AtEqualTall(
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
    createElement('rect', {"x":"9.974727800238441","y":"7.000000000250623","width":"5.999999928535203","height":"9.999999999999659","rx":"2.999996959572737","ry":"2.999996959572737","key":"0"}),
    createElement('line', {"x1":"17.974731450040053","y1":"22.000000000478394","x2":"12.974731450040053","y2":"22.000000000479304","key":"1"}),
    createElement('path', {"d":"M15.974731450040053,14.000000000478394v1c0,1.10456949966192.895430500339899,2,2,2h1c1.104569499660101,0,2-.89543050033808,2-2v-1","key":"2"}),
    createElement('line', {"x1":"3.000000005029506","y1":"2.000000000448381","x2":"7.000000005029506","y2":"2.000000000448381","key":"3"}),
    createElement('line', {"x1":"2.974731450040053","y1":"6.00000000046839","x2":"6.974731450040053","y2":"6.00000000046839","key":"4"}),
    createElement('path', {"d":"M20.974731450040053,14.00000000046839v-4c0-4.41827392578125-3.581726074220569-8-8-8-.691955566409888,0-1.359680175780341.097045898438409-2,.26220703125","key":"5"}),
    createElement('path', {"d":"M4.974731450040053,10.00000000046839v4c0,4.41827392578125,3.581726074219659,8,8,8","key":"6"})
  );
});

AtEqualTall.displayName = 'AtEqualTall';

export default AtEqualTall;
export { AtEqualTall };
