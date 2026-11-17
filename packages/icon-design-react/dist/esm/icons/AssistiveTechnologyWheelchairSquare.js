import { createElement, forwardRef } from 'react';

const AssistiveTechnologyWheelchairSquare = forwardRef(function AssistiveTechnologyWheelchairSquare(
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
    createElement('circle', {"cx":"11.025268548975873","cy":"6.997565476121054","r":"1","key":"0"}),
    createElement('rect', {"x":"2.025268548975873","y":"1.997565476121054","width":"20","height":"20.000000000003638","rx":"1.999999999999636","ry":"1.999999999999636","key":"1"}),
    createElement('polyline', {"points":"11.025268548975873 6.997565476121054 11.025268548975873 13.997565476121054 15.025268548975873 13.997565476121054 17.025268548975873 16.997565476121054 18.025268548975873 16.997565476121054","key":"2"}),
    createElement('line', {"x1":"11.025268548975873","y1":"10.997565476121054","x2":"14.025268548975873","y2":"10.997565476121054","key":"3"}),
    createElement('path', {"d":"M8.025268548975873,10.552314011277304c-1.190673828119543.69293212890625-2,1.96844482421875-2,3.44525146484375,0,2.2091064453125,1.790771484380457,4,4,4,1.007568359380457,0,1.917236328130457-.3851318359375,2.62060546875-1","key":"4"})
  );
});

AssistiveTechnologyWheelchairSquare.displayName = 'AssistiveTechnologyWheelchairSquare';

export default AssistiveTechnologyWheelchairSquare;
export { AssistiveTechnologyWheelchairSquare };
