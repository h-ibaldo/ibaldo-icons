import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextCursor = forwardRef(function TextCursor(
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
    createElement(Path, {"d":"M5 2L7.758 2C8.555 2 9.316 2.316 9.879 2.879L12 5L14.121 2.879C14.684 2.316 15.445 2 16.242 2L19 2","key":"0"}),
    createElement(Path, {"d":"M19 22L15.828 22C15.297 22 14.789 21.789 14.414 21.414L12 19L9.586 21.414C9.211 21.789 8.703 22 8.172 22L5 22","key":"1"}),
    createElement(Path, {"d":"M12 5L12 19","key":"2"})
  );
});

TextCursor.displayName = 'TextCursor';

export default TextCursor;
export { TextCursor };
