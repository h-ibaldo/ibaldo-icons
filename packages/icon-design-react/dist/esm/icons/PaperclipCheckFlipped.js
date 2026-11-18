import { createElement, forwardRef } from 'react';

const PaperclipCheckFlipped = forwardRef(function PaperclipCheckFlipped(
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
    createElement('path', {"d":"M12 5L3.449 13.551C1.516 15.484 1.516 18.617 3.449 20.551C5.383 22.484 8.516 22.484 10.449 20.551L20.965 10.035C22.344 8.656 22.344 6.414 20.965 5.035C19.586 3.656 17.344 3.656 15.965 5.035L7.621 13.379C6.793 14.207 6.793 15.551 7.621 16.379C8.449 17.207 9.793 17.207 10.621 16.379L17 10","key":"0"}),
    createElement('path', {"d":"M2 4L4 6L8 2","key":"1"})
  );
});

PaperclipCheckFlipped.displayName = 'PaperclipCheckFlipped';

export default PaperclipCheckFlipped;
export { PaperclipCheckFlipped };
