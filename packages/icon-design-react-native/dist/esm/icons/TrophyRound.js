import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TrophyRound = forwardRef(function TrophyRound(
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
    createElement(Path, {"d":"M12 14C8.688 14 6 11.313 6 8L6 2L18 2L18 8C18 11.313 15.313 14 12 14Z","key":"0"}),
    createElement(Path, {"d":"M7 22L17 22","key":"1"}),
    createElement(Path, {"d":"M9 19L15 19","key":"2"}),
    createElement(Path, {"d":"M12 14L12 16","key":"3"}),
    createElement(Path, {"d":"M17.711 9.84L20.539 8.625C21.426 8.246 22 7.375 22 6.41C22 5.078 20.922 4 19.59 4L18 4","key":"4"}),
    createElement(Path, {"d":"M6.289 9.84L3.461 8.625C2.574 8.246 2 7.375 2 6.41C2 5.078 3.078 4 4.41 4L6 4","key":"5"})
  );
});

TrophyRound.displayName = 'TrophyRound';

export default TrophyRound;
export { TrophyRound };
