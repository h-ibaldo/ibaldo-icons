import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MedalOne = forwardRef(function MedalOne(
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
    createElement(Path, {"d":"M18 9C18 12.313 15.313 15 12 15C8.688 15 6 12.313 6 9C6 5.688 8.688 3 12 3C15.313 3 18 5.688 18 9Z","key":"0"}),
    createElement(Path, {"d":"M8 13.465L8 21L12 19L16 21L16 13.465","key":"1"}),
    createElement(Path, {"d":"M12 11L12 7L11 7","key":"2"})
  );
});

MedalOne.displayName = 'MedalOne';

export default MedalOne;
export { MedalOne };
