import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GitPullRequestPlusBare = forwardRef(function GitPullRequestPlusBare(
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
    createElement(Path, {"d":"M5 9C3.344 9 2 7.656 2 6C2 4.344 3.344 3 5 3C6.656 3 8 4.344 8 6C8 7.656 6.656 9 5 9Z","key":"0"}),
    createElement(Path, {"d":"M19.063 11L19.063 8C19.063 6.895 18.168 6 17.063 6L12 6","key":"1"}),
    createElement(Path, {"d":"M5 9L5 21","key":"2"}),
    createElement(Path, {"d":"M19 15L19 21","key":"3"}),
    createElement(Path, {"d":"M22 18L16 18","key":"4"})
  );
});

GitPullRequestPlusBare.displayName = 'GitPullRequestPlusBare';

export default GitPullRequestPlusBare;
export { GitPullRequestPlusBare };
