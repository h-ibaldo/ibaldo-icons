import { createElement, forwardRef } from 'react';

const BuildingCity = forwardRef(function BuildingCity(
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
    createElement('path', {"d":"M10 22L17 22L17 2L8 2L8 7","key":"0"}),
    createElement('path', {"d":"M17 22L22 22L22 12L17 12","key":"1"}),
    createElement('path', {"d":"M10 7L2 10L2 22L10 22Z","key":"2"})
  );
});

BuildingCity.displayName = 'BuildingCity';

export default BuildingCity;
export { BuildingCity };
