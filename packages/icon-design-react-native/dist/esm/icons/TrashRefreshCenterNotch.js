import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const TrashRefreshCenterNotch = forwardRef(function TrashRefreshCenterNotch(
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
    createElement(Polyline, {"points":"22.00000000018008 4.000000000393811 15.00000000018008 4.000000000709406 15.000000000090949 2.000000000709406 9.000000000090949 2.000000000980435 9.00000000018008 4.000000000980435 2.00000000018008 4.000000001292392","key":"0"}),
    createElement(Path, {"d":"M20.00000000018008,4.000000000484761l.00000000072032,16c.000000000049113,1.104569499661011-.895430500240764,2.000000000040018-1.99999999991087,2.00000000008913l-12,.00000000054024c-1.104569499659192.000000000047294-2.000000000040018-.895430500249859-2.00000000008913-1.999999999913598l-.00000000072032-16","key":"1"}),
    createElement(Polyline, {"points":"8.000000000549335 9.000000001741682 8.000000000549335 12.000000001741682 11.000000000549335 12.000000001741682","key":"2"}),
    createElement(Path, {"d":"M9.885192871639447,16.000000001741682c.69903564453125.61737060546875,1.607421875,1,2.614807128909888,1,2.209167480470569,0,4-1.79083251953125,4-4s-1.790832519529431-4-4-4c-1.861755371099207,0-3.412536621099207,1.27777099609375-3.858581542959655,3","key":"3"})
  );
});

TrashRefreshCenterNotch.displayName = 'TrashRefreshCenterNotch';

export default TrashRefreshCenterNotch;
export { TrashRefreshCenterNotch };
