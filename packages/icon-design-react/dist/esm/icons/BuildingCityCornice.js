import { createElement, forwardRef } from 'react';

const BuildingCityCornice = forwardRef(function BuildingCityCornice(
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
    createElement('path', {"d":"M8 5L8 7","key":"0"}),
    createElement('path', {"d":"M18 5L7 5","key":"1"}),
    createElement('path', {"d":"M16 2L9 2","key":"2"}),
    createElement('path', {"d":"M10 22L17 22L17 5","key":"3"}),
    createElement('path', {"d":"M22 10L17 10","key":"4"}),
    createElement('path', {"d":"M17 22L21 22L21 10","key":"5"}),
    createElement('path', {"d":"M3 13L3 22L10 22L10 13","key":"6"}),
    createElement('path', {"d":"M11 13L2 13","key":"7"}),
    createElement('path', {"d":"M10 10L3 10","key":"8"})
  );
});

BuildingCityCornice.displayName = 'BuildingCityCornice';

export default BuildingCityCornice;
export { BuildingCityCornice };
