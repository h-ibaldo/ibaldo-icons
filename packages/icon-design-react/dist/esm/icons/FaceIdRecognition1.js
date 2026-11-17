import { createElement, forwardRef } from 'react';

const FaceIdRecognition1 = forwardRef(function FaceIdRecognition1(
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
    createElement('path', {"d":"M2,7.00000000026921v-2.000000000134605c0-1.656854249493335,1.343145750510303-3,3-3h2","key":"0"}),
    createElement('path', {"d":"M21.999999999870852,7.000000000403816l.000000000129148-2.000000000134605c.000000000080036-1.656854249493335-1.34314575037024-3.000000000061846-2.999999999859938-3.000000000134605l-2.000000000140062-.000000000134605","key":"1"}),
    createElement('path', {"d":"M2,17.00000000026921v2.000000000134605c0,1.656854249490607,1.343145750510303,3,3,3h2","key":"2"}),
    createElement('path', {"d":"M21.999999999870852,17.000000000134605l.000000000129148,2.000000000134605c.000000000080036,1.656854249493335-1.34314575037024,3.000000000058208-2.999999999859938,3.000000000134605l-2.000000000140062.000000000134605","key":"3"}),
    createElement('path', {"d":"M12,8.00000000026921v4c0,.552284749832324-.447715250169495,1-1,1h0","key":"4"}),
    createElement('line', {"x1":"17","y1":"8.00000000026921","x2":"17","y2":"10.00000000026921","key":"5"}),
    createElement('line', {"x1":"7","y1":"8.00000000026921","x2":"7","y2":"10.00000000026921","key":"6"}),
    createElement('path', {"d":"M8,16.83654785183171c1.158569335939319.73297119140625,2.527587890630457,1.1634521484375,4,1.1634521484375,1.472412109380457,0,2.841430664060681-.43048095703125,4-1.1634521484375","key":"7"})
  );
});

FaceIdRecognition1.displayName = 'FaceIdRecognition1';

export default FaceIdRecognition1;
export { FaceIdRecognition1 };
