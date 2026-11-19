import { createElement, forwardRef } from 'react';
import Svg, { Line, Polygon } from 'react-native-svg';

const CapsLockFlat = forwardRef(function CapsLockFlat(
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
    createElement(Polygon, {"points":"21.999999977100742 12.999996563434252 11.999999977100742 1.999996563434252 1.999999977100742 12.999996563434252 6.999999977100742 12.999996563434252 6.999999977100742 17.999996563434252 16.999999977100742 17.999996563434252 16.999999977100742 12.999996563434252 21.999999977100742 12.999996563434252","key":"0"}),
    createElement(Line, {"x1":"6.999999977100742","y1":"21.999996563434252","x2":"16.999999977100742","y2":"21.999996563434252","key":"1"})
  );
});

CapsLockFlat.displayName = 'CapsLockFlat';

export default CapsLockFlat;
export { CapsLockFlat };
