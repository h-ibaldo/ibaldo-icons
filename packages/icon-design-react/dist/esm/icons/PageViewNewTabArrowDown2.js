import { createElement, forwardRef } from 'react';

const PageViewNewTabArrowDown2 = forwardRef(function PageViewNewTabArrowDown2(
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
    createElement('polyline', {"points":"11.999999993611709 21.998779299956368 1.999999993611709 21.998779299956368 1.999999993611709 1.998779299956368 10.999999993611709 1.998779299956368 10.999999993611709 5.998779299956368 21.999999993611709 5.998779299956368 21.999999993611709 11.998779299956368","key":"0"}),
    createElement('line', {"x1":"21.999999993611709","y1":"1.998779299956368","x2":"14.999999993611709","y2":"1.998779299956368","key":"1"}),
    createElement('polyline', {"points":"21.999999993611709 18.998779299956368 18.999999993611709 21.998779299956368 15.999999993611709 18.998779299956368","key":"2"}),
    createElement('line', {"x1":"18.999999993611709","y1":"14.998779299956368","x2":"18.999999993611709","y2":"21.998779299956368","key":"3"})
  );
});

PageViewNewTabArrowDown2.displayName = 'PageViewNewTabArrowDown2';

export default PageViewNewTabArrowDown2;
export { PageViewNewTabArrowDown2 };
