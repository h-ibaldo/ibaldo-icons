import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GitPullRequestDraft = forwardRef(function GitPullRequestDraft(
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
    createElement(Path, {"d":"M18.063 15C19.719 15 21.063 16.344 21.063 18C21.063 19.656 19.719 21 18.063 21C16.406 21 15.063 19.656 15.063 18C15.063 16.344 16.406 15 18.063 15Z","key":"0"}),
    createElement(Path, {"d":"M6 9C4.344 9 3 7.656 3 6C3 4.344 4.344 3 6 3C7.656 3 9 4.344 9 6C9 7.656 7.656 9 6 9Z","key":"1"}),
    createElement(Path, {"d":"M6 9L6 21","key":"2"}),
    createElement(Path, {"d":"M18 3L18 5","key":"3"}),
    createElement(Path, {"d":"M18 9L18 11","key":"4"})
  );
});

GitPullRequestDraft.displayName = 'GitPullRequestDraft';

export default GitPullRequestDraft;
export { GitPullRequestDraft };
