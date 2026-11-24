import { createElement, forwardRef } from 'react';

const SearchDotsB = forwardRef(function SearchDotsB(
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
    createElement('circle', {"cx":"9.999999993273377","cy":"9.998779299956368","r":"8","key":"0"}),
    createElement('line', {"x1":"15.656860344834058","y1":"15.655639651518868","x2":"21.999999993273377","y2":"21.998779299956368","key":"1"}),
    createElement('line', {"x1":"5.999999993283382","y1":"10.008779299956586","x2":"5.999999993283382","y2":"9.998779299956368","key":"2"}),
    createElement('line', {"x1":"9.999999993283382","y1":"10.008779299956586","x2":"9.999999993283382","y2":"9.998779299956368","key":"3"}),
    createElement('line', {"x1":"13.999999993283382","y1":"10.008779299956586","x2":"13.999999993283382","y2":"9.998779299956368","key":"4"})
  );
});

SearchDotsB.displayName = 'SearchDotsB';

export default SearchDotsB;
export { SearchDotsB };
