import { createElement, forwardRef } from 'react';

const SearchDotsC = forwardRef(function SearchDotsC(
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
    createElement('circle', {"cx":"8.999999993273377","cy":"8.998779299956368","r":"7.000000000000001","key":"0"}),
    createElement('line', {"x1":"21.999999993273377","y1":"21.998779299956368","x2":"13.999999993273377","y2":"13.998779299956368","key":"1"}),
    createElement('line', {"x1":"5.999999993283382","y1":"9.008779299956586","x2":"5.999999993283382","y2":"8.998779299956368","key":"2"}),
    createElement('line', {"x1":"8.999999993283382","y1":"9.008779299956586","x2":"8.999999993283382","y2":"8.998779299956368","key":"3"}),
    createElement('line', {"x1":"11.999999993283382","y1":"9.008779299956586","x2":"11.999999993283382","y2":"8.998779299956368","key":"4"})
  );
});

SearchDotsC.displayName = 'SearchDotsC';

export default SearchDotsC;
export { SearchDotsC };
