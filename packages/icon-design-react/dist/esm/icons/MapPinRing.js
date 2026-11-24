import { createElement, forwardRef } from 'react';

const MapPinRing = forwardRef(function MapPinRing(
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
    createElement('path', {"d":"M12 22L6.5 11.691C5.035 8.941 5.656 5.551 8 3.5C10.289 1.496 13.711 1.496 16 3.5C18.344 5.551 18.965 8.941 17.5 11.691Z","key":"0"}),
    createElement('path', {"d":"M9 8C9 6.344 10.344 5 12 5C13.656 5 15 6.344 15 8C15 9.656 13.656 11 12 11C10.344 11 9 9.656 9 8Z","key":"1"})
  );
});

MapPinRing.displayName = 'MapPinRing';

export default MapPinRing;
export { MapPinRing };
