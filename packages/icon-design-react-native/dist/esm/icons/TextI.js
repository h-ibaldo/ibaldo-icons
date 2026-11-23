import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextI = forwardRef(function TextI(
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
    createElement(Path, {"d":"M12 2.023L12 22","key":"0"})
  );
});

TextI.displayName = 'TextI';

export default TextI;
export { TextI };
