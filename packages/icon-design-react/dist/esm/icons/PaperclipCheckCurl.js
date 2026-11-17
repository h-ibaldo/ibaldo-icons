import { createElement, forwardRef } from 'react';

const PaperclipCheckCurl = forwardRef(function PaperclipCheckCurl(
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
    createElement('path', {"d":"M11.242 18.758L10.242 19.758C8.586 21.414 5.898 21.414 4.242 19.758C2.586 18.102 2.586 15.414 4.242 13.758L13.758 4.242C15.414 2.586 18.102 2.586 19.758 4.242C21.414 5.898 21.414 8.586 19.758 10.242L15.5 14.5C14.672 15.328 13.328 15.328 12.5 14.5C11.672 13.672 11.672 12.328 12.5 11.5L16 8","key":"0"}),
    createElement('path', {"d":"M2 5L4 7L8 3","key":"1"})
  );
});

PaperclipCheckCurl.displayName = 'PaperclipCheckCurl';

export default PaperclipCheckCurl;
export { PaperclipCheckCurl };
