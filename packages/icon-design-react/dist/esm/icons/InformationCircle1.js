import { createElement, forwardRef } from 'react';

const InformationCircle1 = forwardRef(function InformationCircle1(
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
    createElement('circle', {"cx":"11.94946287847597","cy":"11.997562036048294","r":"10","key":"0"}),
    createElement('line', {"x1":"11.949462878465056","y1":"7.987562035596966","x2":"11.949462878465056","y2":"7.997562035597184","key":"1"}),
    createElement('line', {"x1":"11.949462878465056","y1":"15.997562035597184","x2":"11.949462878465056","y2":"11.997562035597184","key":"2"})
  );
});

InformationCircle1.displayName = 'InformationCircle1';

export default InformationCircle1;
export { InformationCircle1 };
