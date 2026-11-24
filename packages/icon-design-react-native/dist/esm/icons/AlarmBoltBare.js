import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const AlarmBoltBare = forwardRef(function AlarmBoltBare(
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
    createElement(Path, {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z","key":"0"}),
    createElement(Path, {"d":"M13 9L10 12L14 14L11 17","key":"1"}),
    createElement(Path, {"d":"M17 2L21 5","key":"2"}),
    createElement(Path, {"d":"M7 2L3 5","key":"3"})
  );
});

AlarmBoltBare.displayName = 'AlarmBoltBare';

export default AlarmBoltBare;
export { AlarmBoltBare };
