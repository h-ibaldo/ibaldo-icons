import { createElement, forwardRef } from 'react';

const BellRingFlat = forwardRef(function BellRingFlat(
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
    createElement('path', {"d":"M13.974731449503452,17.000000000480213v2.000002000000677c0,1.104568395086972-.895429604908713,1.999997999999323-1.999997999997504,1.999997999999323h-.000004000003173c-1.104568395088791,0-1.999997999999323-.895429604912351-1.999997999999323-1.999997999999323v-2.000002000000677","key":"0"}),
    createElement('line', {"x1":"18.974731449503452","y1":"17.000000000480213","x2":"4.974731449503452","y2":"17.000000000480213","key":"1"}),
    createElement('path', {"d":"M16.974731449503452,17.000000000480213v-7.000005000012607c0-2.761420987728343-2.238574012262688-4.999994999987393-4.999994999987393-4.999994999987393h-.000010000002476c-2.761420987716519,0-4.999994999979208,2.238574012259051-4.999994999986484,4.999994999969203l-.000000000023647,7.000005000030797","key":"2"}),
    createElement('path', {"d":"M20.974731449503452,10.000000000480213c0-2.308349609371362-.87646484375-4.406982421871362-2.305236816403522-6","key":"3"}),
    createElement('path', {"d":"M5.279968265909702,4.000000000480213c-1.42877197265625,1.593017578128638-2.30523681640625,3.691650390628638-2.30523681640625,6","key":"4"})
  );
});

BellRingFlat.displayName = 'BellRingFlat';

export default BellRingFlat;
export { BellRingFlat };
