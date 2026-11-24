import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GitFork = forwardRef(function GitFork(
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
    createElement(Path, {"d":"M5 2C6.656 2 8 3.344 8 5C8 6.656 6.656 8 5 8C3.344 8 2 6.656 2 5C2 3.344 3.344 2 5 2Z","key":"0"}),
    createElement(Path, {"d":"M19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8C17.344 8 16 6.656 16 5C16 3.344 17.344 2 19 2Z","key":"1"}),
    createElement(Path, {"d":"M12 16C13.656 16 15 17.344 15 19C15 20.656 13.656 22 12 22C10.344 22 9 20.656 9 19C9 17.344 10.344 16 12 16Z","key":"2"}),
    createElement(Path, {"d":"M5 8L5 12L19 12L19 8","key":"3"}),
    createElement(Path, {"d":"M12 16L12 12","key":"4"})
  );
});

GitFork.displayName = 'GitFork';

export default GitFork;
export { GitFork };
