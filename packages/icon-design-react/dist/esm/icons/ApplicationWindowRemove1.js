import { createElement, forwardRef } from 'react';

const ApplicationWindowRemove1 = forwardRef(function ApplicationWindowRemove1(
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
    createElement('path', {"d":"M10.999999993632628,21.998779299956368H3.999999993632628c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499660101,0,2,.895430500338989,2,2v9","key":"0"}),
    createElement('line', {"x1":"1.999999993632628","y1":"7.998779299956368","x2":"21.999999993632628","y2":"7.998779299956368","key":"1"}),
    createElement('line', {"x1":"21.999999993632628","y1":"17.998779299956368","x2":"13.999999993642632","y2":"17.998779299956368","key":"2"}),
    createElement('line', {"x1":"5.00999999364285","y1":"4.998779299956368","x2":"4.999999993642632","y2":"4.998779299956368","key":"3"}),
    createElement('line', {"x1":"8.00999999364285","y1":"4.998779299956368","x2":"7.999999993642632","y2":"4.998779299956368","key":"4"}),
    createElement('line', {"x1":"11.00999999364285","y1":"4.998779299956368","x2":"10.999999993642632","y2":"4.998779299956368","key":"5"})
  );
});

ApplicationWindowRemove1.displayName = 'ApplicationWindowRemove1';

export default ApplicationWindowRemove1;
export { ApplicationWindowRemove1 };
