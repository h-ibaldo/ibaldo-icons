import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const CloudCheck = forwardRef(function CloudCheck(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M18,10.999999999718057h-.025207519530341c.014892578120453-.164916992180224.025207519530341-.331176757810681.025207519530341-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.138366699219659,0-3.987365722659888,1.222900390631366-4.897277832030341,3.005187988270336-.034545898439319-.000610351560681-.068054199219659-.005187988270336-.102722167969659-.005187988270336-3.037536621100116,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621099207,2.462463378899884,5.5,5.5,5.5h10.5c2.209167480469659,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519530341-4-4-4Z","key":"0"}),
    createElement(Polyline, {"points":"9.000000012590135 12.999999999718057 11.000000012590135 14.999999999718057 15.000000012590135 10.999999999718057","key":"1"})
  );
});

CloudCheck.displayName = 'CloudCheck';

export default CloudCheck;
export { CloudCheck };
