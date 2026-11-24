import { createElement, forwardRef } from 'react';

const BuildingSlanted = forwardRef(function BuildingSlanted(
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
    createElement('path', {"d":"M20 6L4 2L4 22L20 22Z","key":"0"}),
    createElement('path', {"d":"M8 9L8 18","key":"1"}),
    createElement('path', {"d":"M12 9L12 14","key":"2"}),
    createElement('path', {"d":"M12 18L12 22","key":"3"}),
    createElement('path', {"d":"M16 9L16 18","key":"4"})
  );
});

BuildingSlanted.displayName = 'BuildingSlanted';

export default BuildingSlanted;
export { BuildingSlanted };
