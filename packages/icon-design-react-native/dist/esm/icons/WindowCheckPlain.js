import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const WindowCheckPlain = forwardRef(function WindowCheckPlain(
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
    createElement(Path, {"d":"M9.999999993642632,21.998779299956368h-5c-1.656854249498792,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750501208-3,3-3h14c1.656854249491516,0,3,1.343145750506665,3,3v7","key":"0"}),
    createElement(Line, {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368","key":"1"}),
    createElement(Polyline, {"points":"21.999999993642632 16.998779299956368 16.999999993642632 21.998779299956368 13.999999993642632 18.998779299956368","key":"2"})
  );
});

WindowCheckPlain.displayName = 'WindowCheckPlain';

export default WindowCheckPlain;
export { WindowCheckPlain };
