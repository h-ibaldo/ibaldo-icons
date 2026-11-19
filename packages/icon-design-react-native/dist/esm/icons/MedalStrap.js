import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MedalStrap = forwardRef(function MedalStrap(
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
    createElement(Path, {"d":"M18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16C6 12.688 8.688 10 12 10C15.313 10 18 12.688 18 16Z","key":"0"}),
    createElement(Path, {"d":"M12 5.668L10 2L3 2L8.137 11.414","key":"1"}),
    createElement(Path, {"d":"M15.863 11.414L21 2L14 2L9.277 10.656","key":"2"})
  );
});

MedalStrap.displayName = 'MedalStrap';

export default MedalStrap;
export { MedalStrap };
