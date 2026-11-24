import { createElement, forwardRef } from 'react';

const CrownUnderline = forwardRef(function CrownUnderline(
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
    createElement('path', {"d":"M3 16L3 7L8 10L12 4L16 10L21 7L21 16Z","key":"0"}),
    createElement('path', {"d":"M3 20L21 20","key":"1"})
  );
});

CrownUnderline.displayName = 'CrownUnderline';

export default CrownUnderline;
export { CrownUnderline };
