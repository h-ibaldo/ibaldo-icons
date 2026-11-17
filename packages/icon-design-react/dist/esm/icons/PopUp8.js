import { createElement, forwardRef } from 'react';

const PopUp8 = forwardRef(function PopUp8(
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
    createElement('path', {"d":"M19,6h-4l-3-4-3,4h-4c-1.104569499660101,0-2,.895430500338989-2,2v12c0,1.104569499661011.895430500339899,2,2,2h14c1.104569499670106,0,2-.895430500338989,2-2v-12c0-1.104569499661011-.895430500329894-2-2-2Z","key":"0"}),
    createElement('line', {"x1":"8.010000000000218","y1":"18","x2":"8","y2":"18","key":"1"}),
    createElement('line', {"x1":"8.010000000000218","y1":"14","x2":"8","y2":"14","key":"2"}),
    createElement('line', {"x1":"8.010000000000218","y1":"10","x2":"8","y2":"10","key":"3"}),
    createElement('line', {"x1":"12","y1":"18","x2":"16","y2":"18","key":"4"}),
    createElement('line', {"x1":"12","y1":"14","x2":"16","y2":"14","key":"5"}),
    createElement('line', {"x1":"12","y1":"10","x2":"16","y2":"10","key":"6"})
  );
});

PopUp8.displayName = 'PopUp8';

export default PopUp8;
export { PopUp8 };
