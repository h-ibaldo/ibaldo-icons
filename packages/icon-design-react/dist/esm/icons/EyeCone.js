import { createElement, forwardRef } from 'react';

const EyeCone = forwardRef(function EyeCone(
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
    createElement('ellipse', {"cx":"12.000000003157766","cy":"18.998782736171052","rx":"10","ry":"3","key":"0"}),
    createElement('path', {"d":"M12.000000003157766,1.998782736171052c-2.70361328125,0-5.0205078125,1.65142822265625-6.000244140617724,4,.979736328117724,2.34857177734375,3.296630859367724,4,6.000244140617724,4s5.0205078125-1.65142822265625,6.000244140632276-4c-.979736328132276-2.34857177734375-3.296630859382276-4-6.000244140632276-4Z","key":"1"}),
    createElement('circle', {"cx":"12.000000003157766","cy":"5.998782736171052","r":"1","key":"2"}),
    createElement('path', {"d":"M22.000000003157766,18.998782736171052v-.29180908203125c0-.46575927734375-.1083984375-.925048828125-.316650390617724-1.34161376953125l-4.798828125-9.5975341796875","key":"3"}),
    createElement('path', {"d":"M7.115478518790042,7.767825704921052l-4.798828125,9.5975341796875c-.208251953132276.41656494140625-.316650390632276.8758544921875-.316650390632276,1.34161376953125v.29180908203125","key":"4"})
  );
});

EyeCone.displayName = 'EyeCone';

export default EyeCone;
export { EyeCone };
