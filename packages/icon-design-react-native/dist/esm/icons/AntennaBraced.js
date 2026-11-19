import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path, Polyline } from 'react-native-svg';

const AntennaBraced = forwardRef(function AntennaBraced(
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
    createElement(Circle, {"cx":"12","cy":"10.999999999998181","r":"1","key":"0"}),
    createElement(Polyline, {"points":"17 21.999999999998181 12 10.999999999998181 7 21.999999999998181","key":"1"}),
    createElement(Path, {"d":"M18.340393066409888,17.385314941404431c1.641906738279431-1.63043212890625,2.659606933590112-3.88861083984375,2.659606933590112-6.38531494140625,0-4.9705810546875-4.029418945310681-9-9-9S3,6.029418945310681,3,10.999999999998181c0,2.4967041015625,1.017700195310681,4.7548828125,2.659606933590112,6.38531494140625","key":"2"}),
    createElement(Path, {"d":"M16.409790039060681,13.309631347654431c.364379882808862-.69378662109375.590209960939319-1.4715576171875.590209960939319-2.30963134765625,0-2.76141357421875-2.238586425779431-5-5-5s-5,2.23858642578125-5,5c0,.83807373046875.225830078119543,1.6158447265625.590209960939319,2.30963134765625","key":"3"}),
    createElement(Line, {"x1":"16","y1":"19.999999999998181","x2":"7","y2":"21.999999999998181","key":"4"}),
    createElement(Line, {"x1":"14.431213378909888","y1":"16.348632812498181","x2":"9.0224609375","y2":"17.550537109373181","key":"5"})
  );
});

AntennaBraced.displayName = 'AntennaBraced';

export default AntennaBraced;
export { AntennaBraced };
