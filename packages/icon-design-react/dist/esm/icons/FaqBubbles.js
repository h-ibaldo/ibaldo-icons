import { createElement, forwardRef } from 'react';

const FaqBubbles = forwardRef(function FaqBubbles(
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
    createElement('polyline', {"points":"1.949462885900175 9.000000000480213 1.949462885900175 3.000000000480213 3.949462885900175 3.000000000480213","key":"0"}),
    createElement('line', {"x1":"3.949462885900175","y1":"7.000000000480213","x2":"1.949462885900175","y2":"7.000000000480213","key":"1"}),
    createElement('polyline', {"points":"6.949462885900175 9.000000000480213 7.949462885900175 3.000000000480213 9.949462885900175 3.000000000480213 10.949462885900175 9.000000000480213","key":"2"}),
    createElement('rect', {"x":"13.949462885900175","y":"3.000000000480213","width":"3","height":"6","key":"3"}),
    createElement('line', {"x1":"15.949462885900175","y1":"11.000000000480213","x2":"16.949462885900175","y2":"12.000000000480213","key":"4"}),
    createElement('line', {"x1":"10.549438471840404","y1":"7.000000000480213","x2":"7.349487299969951","y2":"7.000000000480213","key":"5"}),
    createElement('polyline', {"points":"1.949462885900175 12.000000000480213 3.949462885900175 12.000000000480213 3.949462885900175 16.000000000480213 8.949462885900175 12.000000000480213 12.949462885900175 12.000000000480213","key":"6"}),
    createElement('path', {"d":"M9.949462885900175,17.000000000880391l4-.00000000026921,5.000000000140062,3.999999999869033-.000000000140062-4,1.999999999979991-.000000000040018c.552284749819592-.000000000029104.999999999959982-.447715250189503.999999999959982-1v-5.999999999959982","key":"7"})
  );
});

FaqBubbles.displayName = 'FaqBubbles';

export default FaqBubbles;
export { FaqBubbles };
