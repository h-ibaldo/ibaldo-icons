import { createElement, forwardRef } from 'react';

const MoonStar = forwardRef(function MoonStar(
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
    createElement('path', {"d":"M19.88 14.464A9 9 0 1 1 9.536 4.12","key":"0"}),
    createElement('path', {"d":"M19.88 14.464A8 8 0 0 1 9.536 4.12","key":"1"}),
    createElement('path', {"d":"M17.5 2.8L18.558 5.344L21.304 5.564L19.212 7.356L19.851 10.036L17.5 8.6L15.149 10.036L15.788 7.356L13.696 5.564L16.442 5.344Z","key":"2"})
  );
});

MoonStar.displayName = 'MoonStar';

export default MoonStar;
export { MoonStar };
