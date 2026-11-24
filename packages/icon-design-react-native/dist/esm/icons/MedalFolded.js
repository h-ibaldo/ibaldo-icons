import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MedalFolded = forwardRef(function MedalFolded(
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
    createElement(Path, {"d":"M16 18C16 20.211 14.211 22 12 22C9.789 22 8 20.211 8 18C8 15.789 9.789 14 12 14C14.211 14 16 15.789 16 18Z","key":"0"}),
    createElement(Path, {"d":"M9 11L15 11L21 4.5L17 2Z","key":"1"}),
    createElement(Path, {"d":"M12 7.625L7 2L3 4.5L9 11","key":"2"})
  );
});

MedalFolded.displayName = 'MedalFolded';

export default MedalFolded;
export { MedalFolded };
