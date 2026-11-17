import { createElement, forwardRef } from 'react';

const BellRingLinesDash = forwardRef(function BellRingLinesDash(
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
    createElement('line', {"x1":"9.974731449499814","y1":"21.000000000480213","x2":"13.974731449499814","y2":"21.000000000480213","key":"0"}),
    createElement('line', {"x1":"18.974731449499814","y1":"17.000000000480213","x2":"4.974731449499814","y2":"17.000000000480213","key":"1"}),
    createElement('path', {"d":"M16.974731449499814,17.000000000480213v-8.000005000012607c0-2.761420987728343-2.23857401225996-4.999994999987393-4.999994999990122-4.999994999987393h-.000009999999747c-2.761420987720157,0-4.999994999980117,2.238574012259051-4.999994999990122,4.999994999969203l-.000000000020009,8.000005000030797","key":"2"}),
    createElement('line', {"x1":"1.974731449499814","y1":"9.000000000480213","x2":"3.974731449499814","y2":"9.000000000480213","key":"3"}),
    createElement('line', {"x1":"4.974731449549836","y1":"4.000000000480213","x2":"2.974731449499814","y2":"3.000000000571163","key":"4"}),
    createElement('line', {"x1":"19.974731449499814","y1":"9.000000000480213","x2":"21.974731449499814","y2":"9.000000000480213","key":"5"}),
    createElement('line', {"x1":"18.974731449499814","y1":"4.000000000480213","x2":"20.974731449499814","y2":"3.000000000429281","key":"6"}),
    createElement('line', {"x1":"4.974731449589854","y1":"4.000000000440195","x2":"2.974731449499814","y2":"3.000000000480213","key":"7"})
  );
});

BellRingLinesDash.displayName = 'BellRingLinesDash';

export default BellRingLinesDash;
export { BellRingLinesDash };
