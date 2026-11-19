import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MapPinNodes = forwardRef(function MapPinNodes(
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
    createElement(Path, {"d":"M12 7L12 7","key":"0"}),
    createElement(Path, {"d":"M12 3C14.211 3 16 4.789 16 7C16 10 12 14 12 14C12 14 8 10 8 7C8 4.789 9.789 3 12 3","key":"1"}),
    createElement(Path, {"d":"M14 19C14 17.895 13.105 17 12 17C10.895 17 10 17.895 10 19C10 20.105 10.895 21 12 21C13.105 21 14 20.105 14 19Z","key":"2"}),
    createElement(Path, {"d":"M21 14C21 13.449 20.555 13 20 13C19.445 13 19 13.449 19 14C19 14.551 19.445 15 20 15C20.555 15 21 14.551 21 14Z","key":"3"}),
    createElement(Path, {"d":"M5 14C5 13.449 4.555 13 4 13C3.445 13 3 13.449 3 14C3 14.551 3.445 15 4 15C4.555 15 5 14.551 5 14Z","key":"4"}),
    createElement(Path, {"d":"M4 14L10.309 17.941","key":"5"}),
    createElement(Path, {"d":"M13.691 17.941L20 14","key":"6"})
  );
});

MapPinNodes.displayName = 'MapPinNodes';

export default MapPinNodes;
export { MapPinNodes };
