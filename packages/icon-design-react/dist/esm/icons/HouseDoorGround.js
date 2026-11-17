import { createElement, forwardRef } from 'react';

const HouseDoorGround = forwardRef(function HouseDoorGround(
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
    createElement('polyline', {"points":"22.00000000018008 11.000000000842192 12.00000000018008 3.000000000842192 2.00000000018008 11.000000000842192","key":"0"}),
    createElement('line', {"x1":"19.00000000018008","y1":"21.000000000842192","x2":"19.00000000018008","y2":"13.000000000842192","key":"1"}),
    createElement('polyline', {"points":"3.00000000018008 21.000000000842192 10.00000000018008 21.000000000842192 10.00000000018008 15.000000000842192 14.00000000018008 15.000000000842192 14.00000000018008 21.000000000842192 21.00000000018008 21.000000000842192","key":"2"}),
    createElement('line', {"x1":"5.00000000018008","y1":"13.000000000842192","x2":"5.00000000018008","y2":"21.000000000842192","key":"3"})
  );
});

HouseDoorGround.displayName = 'HouseDoorGround';

export default HouseDoorGround;
export { HouseDoorGround };
