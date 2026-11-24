import { createElement, forwardRef } from 'react';

const SearchExpand = forwardRef(function SearchExpand(
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
    createElement('circle', {"cx":"10.974731417511066","cy":"10.998779298535737","r":"9","key":"0"}),
    createElement('line', {"x1":"17.33868405422254","y1":"17.362731935254487","x2":"21.974731417511066","y2":"21.998779298535737","key":"1"}),
    createElement('line', {"x1":"6.974731417511066","y1":"6.998779298535737","x2":"14.974731417511066","y2":"14.998779298535737","key":"2"}),
    createElement('line', {"x1":"6.974731417332805","y1":"14.998779298357476","x2":"14.974731417692965","y2":"6.998779298717636","key":"3"}),
    createElement('polyline', {"points":"6.974731417511066 8.998779298535737 6.974731417511066 6.998779298535737 8.974731417511066 6.998779298535737","key":"4"}),
    createElement('polyline', {"points":"12.974731417421935 6.998779298626687 14.974731417421935 6.998779298535737 14.974731417511066 8.998779298535737","key":"5"}),
    createElement('polyline', {"points":"14.974731417511066 12.998779298535737 14.974731417511066 14.998779298535737 12.974731417511066 14.998779298535737","key":"6"}),
    createElement('polyline', {"points":"8.974731417602015 14.998779298448426 6.974731417602015 14.998779298535737 6.974731417511066 12.998779298535737","key":"7"})
  );
});

SearchExpand.displayName = 'SearchExpand';

export default SearchExpand;
export { SearchExpand };
