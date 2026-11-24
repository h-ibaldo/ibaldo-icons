import { createElement, forwardRef } from 'react';

const NavigationUpRound = forwardRef(function NavigationUpRound(
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
    createElement('path', {"d":"M13.82 4.07L20.945 16.898C21.926 18.664 20.074 20.648 18.246 19.797L13.16 17.422C12.426 17.078 11.574 17.078 10.84 17.422L5.754 19.797C3.926 20.648 2.074 18.664 3.055 16.898L10.18 4.07C10.973 2.641 13.027 2.641 13.82 4.07Z","key":"0"})
  );
});

NavigationUpRound.displayName = 'NavigationUpRound';

export default NavigationUpRound;
export { NavigationUpRound };
