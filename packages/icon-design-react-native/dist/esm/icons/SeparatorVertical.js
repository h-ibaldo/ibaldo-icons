import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SeparatorVertical = forwardRef(function SeparatorVertical(
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
    createElement(Path, {"d":"M12 22L12 2","key":"0"}),
    createElement(Path, {"d":"M17 17L22 11.684L17 6.363","key":"1"}),
    createElement(Path, {"d":"M6.859 6.363L2 11.684L6.859 17","key":"2"})
  );
});

SeparatorVertical.displayName = 'SeparatorVertical';

export default SeparatorVertical;
export { SeparatorVertical };
