import { createElement, forwardRef } from 'react';

const SearchCheckB = forwardRef(function SearchCheckB(
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
    createElement('circle', {"cx":"9.999999993264282","cy":"9.998779299956368","r":"8","key":"0"}),
    createElement('line', {"x1":"15.656860344823144","y1":"15.655639651518868","x2":"21.999999993264282","y2":"21.998779299956368","key":"1"}),
    createElement('polyline', {"points":"6.999999993283382 9.998779299956368 8.999999993283382 11.998779299956368 12.999999993283382 7.998779299956368","key":"2"})
  );
});

SearchCheckB.displayName = 'SearchCheckB';

export default SearchCheckB;
export { SearchCheckB };
