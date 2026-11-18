import { createElement, forwardRef } from 'react';

const CrownJewelStraight = forwardRef(function CrownJewelStraight(
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
    createElement('path', {"d":"M3 20L3 6L8 12L12 6L16 12L21 6L21 20Z","key":"0"}),
    createElement('path', {"d":"M22 5C22 5.551 21.555 6 21 6C20.445 6 20 5.551 20 5C20 4.449 20.445 4 21 4C21.555 4 22 4.449 22 5Z","key":"1"}),
    createElement('path', {"d":"M13 5C13 5.551 12.555 6 12 6C11.445 6 11 5.551 11 5C11 4.449 11.445 4 12 4C12.555 4 13 4.449 13 5Z","key":"2"}),
    createElement('path', {"d":"M4 5C4 5.551 3.555 6 3 6C2.445 6 2 5.551 2 5C2 4.449 2.445 4 3 4C3.555 4 4 4.449 4 5Z","key":"3"})
  );
});

CrownJewelStraight.displayName = 'CrownJewelStraight';

export default CrownJewelStraight;
export { CrownJewelStraight };
