import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const CloudCheckRound = forwardRef(function CloudCheckRound(
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
    createElement(Path, {"d":"M17.924255383692071,9.093139648438409c-.438171386720569-2.882202148440228-2.919616699220569-5.093139648440228-5.924255371101026-5.093139648440228-3.004638671869543,0-5.486083984369543,2.2109375-5.924255371090112,5.093139648440228-2.318725585939319.434509277339203-4.075744628909888,2.462036132809772-4.075744628909888,4.906860351559772,0,2.761413574209655,2.238525390630457,5,5,5h10c2.761474609380457,0,5-2.238586425790345,5-5,0-2.44482421875-1.75701904296875-4.472351074220569-4.075744628898974-4.906860351559772Z","key":"0"}),
    createElement(Polyline, {"points":"9.000000012591045 12.999999973497324 11.000000012591045 14.999999973497324 15.000000012591045 10.999999973497324","key":"1"})
  );
});

CloudCheckRound.displayName = 'CloudCheckRound';

export default CloudCheckRound;
export { CloudCheckRound };
