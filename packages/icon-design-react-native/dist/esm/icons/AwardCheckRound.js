import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const AwardCheckRound = forwardRef(function AwardCheckRound(
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
    createElement(Path, {"d":"M12.922 14.922L18 20L19 17L22 16L17.465 11.465","key":"0"}),
    createElement(Path, {"d":"M18 9C18 12.313 15.313 15 12 15C8.688 15 6 12.313 6 9C6 5.688 8.688 3 12 3C15.313 3 18 5.688 18 9Z","key":"1"}),
    createElement(Path, {"d":"M6.535 11.465L2 16L5 17L6 20L11.078 14.922","key":"2"}),
    createElement(Path, {"d":"M10 9L10.691 10.379C10.844 10.684 11.25 10.75 11.492 10.512L14 8","key":"3"})
  );
});

AwardCheckRound.displayName = 'AwardCheckRound';

export default AwardCheckRound;
export { AwardCheckRound };
