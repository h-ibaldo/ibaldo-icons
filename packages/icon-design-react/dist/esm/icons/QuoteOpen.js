import { createElement, forwardRef } from 'react';

const QuoteOpen = forwardRef(function QuoteOpen(
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
    createElement('path', {"d":"M22 5L22 12C22 13.105 21.105 14 20 14L18 14L18 15.344C18 16.402 18.422 17.422 19.172 18.172L21 20L18 22L15.172 19.172C14.422 18.422 14 17.402 14 16.344L14 5C14 3.895 14.895 3 16 3L20 3C21.105 3 22 3.895 22 5Z","key":"0"}),
    createElement('path', {"d":"M10 5L10 12C10 13.105 9.105 14 8 14L6 14L6 15.344C6 16.402 6.422 17.422 7.172 18.172L9 20L6 22L3.172 19.172C2.422 18.422 2 17.402 2 16.344L2 5C2 3.895 2.895 3 4 3L8 3C9.105 3 10 3.895 10 5Z","key":"1"})
  );
});

QuoteOpen.displayName = 'QuoteOpen';

export default QuoteOpen;
export { QuoteOpen };
