import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GitPullRequest = forwardRef(function GitPullRequest(
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
    createElement(Path, {"d":"M19.063 15C20.719 15 22.063 16.344 22.063 18C22.063 19.656 20.719 21 19.063 21C17.406 21 16.063 19.656 16.063 18C16.063 16.344 17.406 15 19.063 15Z","key":"0"}),
    createElement(Path, {"d":"M5 9C3.344 9 2 7.656 2 6C2 4.344 3.344 3 5 3C6.656 3 8 4.344 8 6C8 7.656 6.656 9 5 9Z","key":"1"}),
    createElement(Path, {"d":"M19.063 15L19.063 8C19.063 6.895 18.168 6 17.063 6L12 6","key":"2"}),
    createElement(Path, {"d":"M5 9L5 21","key":"3"}),
    createElement(Path, {"d":"M15 9L12 6L15 3","key":"4"})
  );
});

GitPullRequest.displayName = 'GitPullRequest';

export default GitPullRequest;
export { GitPullRequest };
