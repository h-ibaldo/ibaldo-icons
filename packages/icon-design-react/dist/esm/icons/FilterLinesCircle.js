import { createElement, forwardRef } from 'react';

const FilterLinesCircle = forwardRef(function FilterLinesCircle(
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
    createElement('circle', {"cx":"11.974731449501633","cy":"12.000000000479986","r":"10.000000000000341","key":"0"}),
    createElement('line', {"x1":"6.974731449501633","y1":"9.000000000480213","x2":"16.974731449501633","y2":"9.000000000480213","key":"1"}),
    createElement('line', {"x1":"8.974731449501633","y1":"13.000000000480213","x2":"14.974731449501633","y2":"13.000000000480213","key":"2"}),
    createElement('line', {"x1":"10.974731449501633","y1":"17.000000000480213","x2":"12.974731449501633","y2":"17.000000000480213","key":"3"})
  );
});

FilterLinesCircle.displayName = 'FilterLinesCircle';

export default FilterLinesCircle;
export { FilterLinesCircle };
