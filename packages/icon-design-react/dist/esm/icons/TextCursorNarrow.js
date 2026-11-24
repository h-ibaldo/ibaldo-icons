import { createElement, forwardRef } from 'react';

const TextCursorNarrow = forwardRef(function TextCursorNarrow(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M8 2L8.758 2C9.555 2 10.316 2.316 10.879 2.879L12 4L13.121 2.879C13.684 2.316 14.445 2 15.242 2L16 2","key":"0"}),
    createElement('path', {"d":"M16 22L15.242 22C14.445 22 13.684 21.684 13.121 21.121L12 20L10.879 21.121C10.316 21.684 9.555 22 8.758 22L8 22","key":"1"}),
    createElement('path', {"d":"M12 4L12 20","key":"2"})
  );
});

TextCursorNarrow.displayName = 'TextCursorNarrow';

export default TextCursorNarrow;
export { TextCursorNarrow };
