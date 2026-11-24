import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const TrashRefresh = forwardRef(function TrashRefresh(
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
    createElement(Polyline, {"points":"11.00000000018008 13.000000000709406 11.00000000018008 16.000000000706677 14.00000000018008 16.000000000706677","key":"0"}),
    createElement(Path, {"d":"M12.100769043150649,16.000000000709406c.46337890625-2.282165527344659,2.480346679689319-4,4.899230957029431-4,2.761413574220569,0,5,2.238586425780341,5,5,0,2.761413574217841-2.238586425779431,5-5,5-1.630493164060681,0-3.064636230470569-.792236328125-3.977355957029431-2","key":"1"}),
    createElement(Path, {"d":"M11.00000000018008,22.000000000709406h-5c-1.104569499659192,0-2-.89543050033808-2-2V6.000000000710315","key":"2"}),
    createElement(Line, {"x1":"16.00000000018008","y1":"6.000000000710315","x2":"16.00000000018008","y2":"9.000000000709406","key":"3"}),
    createElement(Line, {"x1":"2.00000000018008","y1":"6.000000000710315","x2":"18.00000000018008","y2":"6.000000000710315","key":"4"}),
    createElement(Path, {"d":"M13.00000000018008,6.000000000710315v-2.35392100772151c0-.909104324453438-.736974667830509-1.646078992279399-1.646078992280309-1.646078992279399h-2.707842015430288c-.909104324458895,0-1.646078992289404.736974667825962-1.646078992289404,1.646078992279399v2.35392100772151","key":"5"})
  );
});

TrashRefresh.displayName = 'TrashRefresh';

export default TrashRefresh;
export { TrashRefresh };
