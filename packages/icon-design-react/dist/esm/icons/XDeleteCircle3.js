import { createElement, forwardRef } from 'react';

const XDeleteCircle3 = forwardRef(function XDeleteCircle3(
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
    createElement('line', {"x1":"9.999999990879587","y1":"14.000000000806722","x2":"13.999999990699507","y2":"10.000000000986802","key":"0"}),
    createElement('line', {"x1":"13.999999990610377","y1":"14.000000000894943","x2":"9.999999990970537","y2":"10.000000000897671","key":"1"}),
    createElement('circle', {"cx":"11.999999990790457","cy":"12.000000000897671","r":"10","key":"2"})
  );
});

XDeleteCircle3.displayName = 'XDeleteCircle3';

export default XDeleteCircle3;
export { XDeleteCircle3 };
