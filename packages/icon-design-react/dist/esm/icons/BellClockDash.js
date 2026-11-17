import { createElement, forwardRef } from 'react';

const BellClockDash = forwardRef(function BellClockDash(
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
    createElement('line', {"x1":"18.974731449501633","y1":"17.000000000480213","x2":"2.974731449501633","y2":"17.000000000480213","key":"0"}),
    createElement('line', {"x1":"8.974731449501633","y1":"21.000000000480213","x2":"12.974731449501633","y2":"21.000000000480213","key":"1"}),
    createElement('circle', {"cx":"16.974731447075101","cy":"6.999999998052772","r":"4.999999997575742","key":"2"}),
    createElement('path', {"d":"M13.398376469032883,3.513916016108851c-.74169921875-.328125-1.5604248046875-.513916015628638-2.42364501953125-.513916015628638-3.313720703125,0-6,2.686279296878638-6,6v8h12v-5","key":"3"}),
    createElement('polyline', {"points":"16.974731449501633 5.000000000480213 16.974731449501633 7.000000000480213 18.974731449501633 7.000000000480213","key":"4"})
  );
});

BellClockDash.displayName = 'BellClockDash';

export default BellClockDash;
export { BellClockDash };
