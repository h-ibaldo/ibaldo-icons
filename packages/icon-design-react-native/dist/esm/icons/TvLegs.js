import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TvLegs = forwardRef(function TvLegs(
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
    createElement(Path, {"d":"M2 4L22 4L22 15L2 15Z","key":"0"}),
    createElement(Path, {"d":"M12 15L12 17","key":"1"}),
    createElement(Path, {"d":"M4 20L12 18L20 20","key":"2"})
  );
});

TvLegs.displayName = 'TvLegs';

export default TvLegs;
export { TvLegs };
