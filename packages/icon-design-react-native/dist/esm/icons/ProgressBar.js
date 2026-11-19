import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const ProgressBar = forwardRef(function ProgressBar(
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
    createElement(Rect, {"x":"1.974731447505079","y":"7.999999998411681","width":"19.999999999999972","height":"8.000000004690492","rx":"3.999996000808866","ry":"3.999996000808866","key":"0"}),
    createElement(Rect, {"x":"4.974731447505022","y":"10.999999995049066","width":"7.999999999999972","height":"2.000000011334095","rx":".999999006338874","ry":".999999006338874","key":"1"})
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
export { ProgressBar };
