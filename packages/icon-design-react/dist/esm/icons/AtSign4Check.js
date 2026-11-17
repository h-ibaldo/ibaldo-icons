import { createElement, forwardRef } from 'react';

const AtSign4Check = forwardRef(function AtSign4Check(
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
    createElement('rect', {"x":"9.974727791158273","y":"7.000000000250623","width":"5.999999946695993","height":"9.999999999999659","rx":"2.999996969491233","ry":"2.999996969491233","key":"0"}),
    createElement('line', {"x1":"17.974731450040053","y1":"22.000000000478394","x2":"12.974731450040053","y2":"22.000000000479304","key":"1"}),
    createElement('path', {"d":"M15.974731450040053,14.000000000478394v1c0,1.10456949966192.895430500339899,2,2,2h1c1.104569499660101,0,2-.89543050033808,2-2v-1","key":"2"}),
    createElement('polyline', {"points":"2.974731450040053 4.00000000046839 4.974731450040053 6.00000000046839 8.974731450040053 2.00000000046839","key":"3"}),
    createElement('path', {"d":"M20.974731450040053,14.00000000046839v-4c0-4.41827392578125-3.581726074220569-8-8-8","key":"4"}),
    createElement('path', {"d":"M4.974731450040053,10.00000000046839v4c0,4.41827392578125,3.581726074219659,8,8,8","key":"5"})
  );
});

AtSign4Check.displayName = 'AtSign4Check';

export default AtSign4Check;
export { AtSign4Check };
