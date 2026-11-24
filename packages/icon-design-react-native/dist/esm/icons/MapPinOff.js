import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MapPinOff = forwardRef(function MapPinOff(
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
    createElement(Path, {"d":"M3 3L21 21","key":"0"}),
    createElement(Path, {"d":"M10.586 6.586C10.949 6.223 11.449 6 12 6C13.105 6 14 6.895 14 8C14 8.551 13.777 9.051 13.414 9.414","key":"1"}),
    createElement(Path, {"d":"M7.738 3.738C7.824 3.656 7.91 3.578 8 3.5C10.289 1.496 13.711 1.496 16 3.5C18.344 5.551 18.965 8.941 17.5 11.691L16.871 12.871M15.477 15.477L12 22L6.5 11.691C5.566 9.934 5.48 7.918 6.152 6.152","key":"2"})
  );
});

MapPinOff.displayName = 'MapPinOff';

export default MapPinOff;
export { MapPinOff };
