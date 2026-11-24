import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MapPinCheck = forwardRef(function MapPinCheck(
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
    createElement(Path, {"d":"M12 22L6.5 11.691C5.035 8.941 5.656 5.551 8 3.5C10.289 1.496 13.711 1.496 16 3.5C18.344 5.551 18.965 8.941 17.5 11.691Z","key":"0"}),
    createElement(Path, {"d":"M10 9L11 11L14 7","key":"1"})
  );
});

MapPinCheck.displayName = 'MapPinCheck';

export default MapPinCheck;
export { MapPinCheck };
