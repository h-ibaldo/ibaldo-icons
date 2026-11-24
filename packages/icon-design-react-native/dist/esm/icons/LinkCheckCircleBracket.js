import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkCheckCircleBracket = forwardRef(function LinkCheckCircleBracket(
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
    createElement(Path, {"d":"M9 12L7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2L9 2","key":"0"}),
    createElement(Path, {"d":"M8 7L16 7","key":"1"}),
    createElement(Path, {"d":"M12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17Z","key":"2"}),
    createElement(Path, {"d":"M21.578 9C21.848 8.387 22 7.711 22 7C22 4.238 19.762 2 17 2L15 2","key":"3"}),
    createElement(Path, {"d":"M15.5 17.02L16.5 18.02L18.5 16.02","key":"4"})
  );
});

LinkCheckCircleBracket.displayName = 'LinkCheckCircleBracket';

export default LinkCheckCircleBracket;
export { LinkCheckCircleBracket };
