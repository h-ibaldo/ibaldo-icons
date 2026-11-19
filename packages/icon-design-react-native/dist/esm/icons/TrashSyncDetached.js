import { createElement, forwardRef } from 'react';
import Svg, { G, Line, Path, Polyline } from 'react-native-svg';

const TrashSyncDetached = forwardRef(function TrashSyncDetached(
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
    createElement(Path, {"d":"M7.974731450080071,22.000000000459295h-2c-1.104569499660101,0-2-.89543050033717-2-2V6.000000000462023","key":"0"}),
    createElement(Line, {"x1":"14.97473145010008","y1":"6.000000000462023","x2":"14.97473145010008","y2":"9.000000000459295","key":"1"}),
    createElement(Line, {"x1":"1.974731450080071","y1":"6.000000000462023","x2":"16.97473145010008","y2":"6.000000000462023","key":"2"}),
    createElement(G, {"key":"3"},
      createElement(Polyline, {"points":"21.974731450080071 12.000000000459295 21.974731450080071 15.000000000456566 18.974731450080071 15.000000000456566","key":"0"}),
      createElement(Polyline, {"points":"10.974731450080071 21.000000000459295 10.974731450080071 18.000000000462023 13.974731450080071 18.000000000462023","key":"1"}),
      createElement(Path, {"d":"M21.552612309449614,15.000000000459295c-.772216796869543-1.764404296875-2.528686523439319-3-4.577880859369543-3-1.630493164069776,0-3.064636230470569.792236328125-3.977355957030341,2","key":"2"}),
      createElement(Path, {"d":"M12.075500493049731,18.000000000459295c.46337890625,2.282165527344659,2.480346679680224,4,4.899230957030341,4,2.047790527340112,0,3.796447753899884-1.237548828125,4.5693359375-3","key":"3"})),
    createElement(Line, {"x1":"6.97473145010008","y1":"2.000000000459295","x2":"11.97473145010008","y2":"2.000000000459295","key":"4"})
  );
});

TrashSyncDetached.displayName = 'TrashSyncDetached';

export default TrashSyncDetached;
export { TrashSyncDetached };
