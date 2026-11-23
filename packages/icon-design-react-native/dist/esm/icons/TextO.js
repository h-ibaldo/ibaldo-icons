import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextO = forwardRef(function TextO(
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
    createElement(Path, {"d":"M12 2C7 2 4 6 4 12C4 18 7 22 12 22","key":"0"}),
    createElement(Path, {"d":"M12 22C17 22 20 18 20 12C20 6 17 2 12 2","key":"1"})
  );
});

TextO.displayName = 'TextO';

export default TextO;
export { TextO };
