import { createElement, forwardRef } from 'react';

const VoteArrowsPlusMinus = forwardRef(function VoteArrowsPlusMinus(
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
    createElement('line', {"x1":"18.016630450973935","y1":"3.000000000480213","x2":"18.016630450973935","y2":"11.000000000480213","key":"0"}),
    createElement('line', {"x1":"5.016630450973935","y1":"2.000000000480213","x2":"5.016630450973935","y2":"9.000000000480213","key":"1"}),
    createElement('line', {"x1":"22.016630450973935","y1":"7.000000000480213","x2":"14.016630450973935","y2":"7.000000000480213","key":"2"}),
    createElement('line', {"x1":"22.016630450973935","y1":"19.000000000480213","x2":"14.016630450973935","y2":"19.000000000480213","key":"3"}),
    createElement('polyline', {"points":"2.016630450973935 5.000000000480213 5.016630450973935 2.000000000480213 8.016630450973935 5.000000000480213","key":"4"}),
    createElement('line', {"x1":"5.016630450973935","y1":"22.000000000480213","x2":"5.016630450973935","y2":"15.000000000480213","key":"5"}),
    createElement('polyline', {"points":"8.016630450973935 19.000000000480213 5.016630450973935 22.000000000480213 2.016630450973935 19.000000000480213","key":"6"})
  );
});

VoteArrowsPlusMinus.displayName = 'VoteArrowsPlusMinus';

export default VoteArrowsPlusMinus;
export { VoteArrowsPlusMinus };
