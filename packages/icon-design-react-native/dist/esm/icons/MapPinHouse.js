import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MapPinHouse = forwardRef(function MapPinHouse(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M11.117 18.027L9 22L3.5 11.691C2.035 8.941 2.656 5.551 5 3.5C7.289 1.496 10.711 1.496 13 3.5C15.344 5.551 15.965 8.941 14.5 11.691","key":"0"}),
    createElement(Path, {"d":"M7 8C7 6.895 7.895 6 9 6C10.105 6 11 6.895 11 8C11 9.105 10.105 10 9 10C7.895 10 7 9.105 7 8Z","key":"1"}),
    createElement(Path, {"d":"M14 21L14 15.902L18 13L22 16L22 21Z","key":"2"})
  );
});

MapPinHouse.displayName = 'MapPinHouse';

export default MapPinHouse;
export { MapPinHouse };
