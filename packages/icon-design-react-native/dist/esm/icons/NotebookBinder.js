import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const NotebookBinder = forwardRef(function NotebookBinder(
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
    createElement(Path, {"d":"M6 12L6 10","key":"0"}),
    createElement(Path, {"d":"M6 17L6 15","key":"1"}),
    createElement(Path, {"d":"M6 7L6 4C6 3.449 6.449 3 7 3L19 3C19.551 3 20 3.449 20 4L20 20C20 20.551 19.551 21 19 21L7 21C6.449 21 6 20.551 6 20","key":"2"}),
    createElement(Path, {"d":"M4 7L8 7","key":"3"}),
    createElement(Path, {"d":"M4 12L8 12","key":"4"}),
    createElement(Path, {"d":"M4 17L8 17","key":"5"})
  );
});

NotebookBinder.displayName = 'NotebookBinder';

export default NotebookBinder;
export { NotebookBinder };
