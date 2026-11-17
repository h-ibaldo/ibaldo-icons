import { createElement, forwardRef } from 'react';

const TrashDelete4 = forwardRef(function TrashDelete4(
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
    createElement('path', {"d":"M18.025268545770814,6.000000001481567v14c0,1.104569499661011-.895430500340808,2-2,2h-8c-1.104569499671925,0-2-.895430500338989-2-2V6.000000001481567","key":"0"}),
    createElement('line', {"x1":"10.025268545770814","y1":"10.000000001481567","x2":"10.025268545770814","y2":"18.000000001481567","key":"1"}),
    createElement('line', {"x1":"14.025268545770814","y1":"10.000000001481567","x2":"14.025268545770814","y2":"18.000000001481567","key":"2"}),
    createElement('line', {"x1":"20.025268545770814","y1":"6.000000001481567","x2":"4.025268545770814","y2":"6.000000001481567","key":"3"}),
    createElement('line', {"x1":"9.025268545770814","y1":"2.000000001481567","x2":"14.025268545770814","y2":"2.000000001481567","key":"4"})
  );
});

TrashDelete4.displayName = 'TrashDelete4';

export default TrashDelete4;
export { TrashDelete4 };
