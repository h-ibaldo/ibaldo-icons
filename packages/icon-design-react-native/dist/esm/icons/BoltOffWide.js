import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const BoltOffWide = forwardRef(function BoltOffWide(
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
    createElement(Line, {"x1":"20.999999976489562","y1":"20.998779299956368","x2":"2.999999976489562","y2":"2.998779299956368","key":"0"}),
    createElement(Polyline, {"points":"14.320007300710131 14.318786624175118 18.999999976489562 9.998840335112618 13.999999976489562 9.998779299956368 17.999999976489562 1.998779299956368 8.999999976489562 1.998779299956368 6.999999976489562 6.998779299956368","key":"1"}),
    createElement(Polyline, {"points":"5.571411109309338 10.570190432768868 4.999999976489562 11.998779299956368 6.999999976489562 11.998779299956368","key":"2"}),
    createElement(Polyline, {"points":"8.749999976489562 13.748779299956368 5.999999976489562 21.998840335112618 11.720031714779907 16.718811038237618","key":"3"})
  );
});

BoltOffWide.displayName = 'BoltOffWide';

export default BoltOffWide;
export { BoltOffWide };
