import { createElement, forwardRef } from 'react';
import Svg, { G, Line, Polyline } from 'react-native-svg';

const BoltOffTilted = forwardRef(function BoltOffTilted(
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
    createElement(G, {"key":"1"},
      createElement(Polyline, {"points":"15.499999976489562 15.498779299956368 18.999999976489562 11.998779299956368 13.559997535090588 9.998779299956368 14.999999976489562 1.998779299956368 8.499999976489562 8.498779299956368","key":"0"}),
      createElement(Polyline, {"points":"10.220336890559338 15.219116214018868 8.999999976489562 21.998840335112618 12.999999976489562 17.998779299956368","key":"1"}),
      createElement(Polyline, {"points":"5.999999976489562 10.998779299956368 4.999999976489562 11.998779299956368 8.162780738210131 13.161560061675118","key":"2"}))
  );
});

BoltOffTilted.displayName = 'BoltOffTilted';

export default BoltOffTilted;
export { BoltOffTilted };
