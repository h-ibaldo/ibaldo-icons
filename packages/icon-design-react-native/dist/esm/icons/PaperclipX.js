import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperclipX = forwardRef(function PaperclipX(
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
    createElement(Path, {"d":"M15 8L9 14C8.172 14.828 8.172 16.172 9 16.996L9.004 17C9.828 17.828 11.172 17.828 12 17L19.758 9.242C21.414 7.586 21.414 4.898 19.758 3.242C18.102 1.586 15.414 1.586 13.758 3.242L5.863 11.137C3.379 13.621 3.379 17.648 5.863 20.133L5.867 20.137C8.352 22.621 12.379 22.621 14.863 20.137L21 14","key":"0"}),
    createElement(Path, {"d":"M6 6L2 2","key":"1"}),
    createElement(Path, {"d":"M6 2L2 6","key":"2"})
  );
});

PaperclipX.displayName = 'PaperclipX';

export default PaperclipX;
export { PaperclipX };
