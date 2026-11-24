import { createElement, forwardRef } from 'react';

const HouseDoor = forwardRef(function HouseDoor(
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
    createElement('polygon', {"points":"11.999999999239662 3.000000000842192 1.999999999239662 13.000000000842192 4.999999999239662 13.000000000842192 4.999999999239662 21.000000000842192 9.999999999239662 21.000000000842192 9.999999999239662 16.000000000842192 13.999999999239662 16.000000000842192 13.999999999239662 21.000000000842192 18.999999999239662 21.000000000842192 18.999999999239662 13.000000000842192 21.999999999239662 13.000000000842192 11.999999999239662 3.000000000842192","key":"0"})
  );
});

HouseDoor.displayName = 'HouseDoor';

export default HouseDoor;
export { HouseDoor };
