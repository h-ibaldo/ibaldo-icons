import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MapPinWide = forwardRef(function MapPinWide(
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
    createElement(Path, {"d":"M12 2C7.582 2 4 5.582 4 10C4 12.563 5.016 15.016 6.828 16.828L12 22L17.172 16.828C18.984 15.016 20 12.563 20 10C20 5.582 16.418 2 12 2Z","key":"0"}),
    createElement(Path, {"d":"M16 10C16 12.211 14.211 14 12 14C9.789 14 8 12.211 8 10C8 7.789 9.789 6 12 6C14.211 6 16 7.789 16 10Z","key":"1"})
  );
});

MapPinWide.displayName = 'MapPinWide';

export default MapPinWide;
export { MapPinWide };
