import { createElement, forwardRef } from 'react';

const TrashArrowUpRestore5 = forwardRef(function TrashArrowUpRestore5(
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
    createElement('polyline', {"points":"21.97473145010008 3.999999997990017 14.97473145010008 3.999999998305611 14.97473145001004 1.999999998305611 8.97473145001004 1.999999998572093 8.97473145010008 3.999999998572093 1.97473145010008 3.999999998886778","key":"0"}),
    createElement('path', {"d":"M19.97473145010008,3.999999998078238l.000000000709406,16c.000000000050932,1.104569499663739-.895430500238945,2.000000000040018-1.999999999909051,2.000000000090949l-12,.000000000538421c-1.104569499660101.000000000049113-2.000000000040018-.895430500246221-2.000000000090949-1.99999999991087l-.000000000709406-16","key":"1"}),
    createElement('polyline', {"points":"8.97473145010008 12.000000000459295 11.974731450080071 9.000000000459295 14.97473145010008 12.000000000459295","key":"2"}),
    createElement('line', {"x1":"11.974731450080071","y1":"17.000000000459295","x2":"11.974731450080071","y2":"9.000000000459295","key":"3"})
  );
});

TrashArrowUpRestore5.displayName = 'TrashArrowUpRestore5';

export default TrashArrowUpRestore5;
export { TrashArrowUpRestore5 };
