import { createElement, forwardRef } from 'react';

const BuildingDoorWide = forwardRef(function BuildingDoorWide(
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
    createElement('path', {"d":"M4 6L4 22L20 22L20 6","key":"0"}),
    createElement('path', {"d":"M22 6L2 6","key":"1"}),
    createElement('path', {"d":"M8 10L8 10","key":"2"}),
    createElement('path', {"d":"M12 10L12 10","key":"3"}),
    createElement('path', {"d":"M8 14L8 14","key":"4"}),
    createElement('path', {"d":"M12 14L12 14","key":"5"}),
    createElement('path', {"d":"M8 18L8 18","key":"6"}),
    createElement('path', {"d":"M12 22L12 18","key":"7"}),
    createElement('path', {"d":"M16 10L16 10","key":"8"}),
    createElement('path', {"d":"M16 14L16 14","key":"9"}),
    createElement('path', {"d":"M16 18L16 18","key":"10"}),
    createElement('path', {"d":"M7 2L17 2","key":"11"})
  );
});

BuildingDoorWide.displayName = 'BuildingDoorWide';

export default BuildingDoorWide;
export { BuildingDoorWide };
