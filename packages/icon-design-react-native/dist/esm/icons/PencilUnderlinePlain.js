import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const PencilUnderlinePlain = forwardRef(function PencilUnderlinePlain(
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
    createElement(Path, {"d":"M21.171573696589803,3.000003160129381l-.000003999999535-.000004000000445c-1.10456839751987-1.104568382121215-2.895427596859918-1.104568375882081-3.999995986670001.000000013938916L2.999999992550329,17.171572891407777l-.99999999928059,4.999999999281499,4.99999999963984-.99999999963984,14.171573717620049-14.171573717620049c1.104568400360222-1.104568400362041,1.104568394120179-2.895427620642295-.000000013939825-3.999996013300006Z","key":"0"}),
    createElement(Line, {"x1":"11","y1":"22.171572891049436","x2":"22","y2":"22.171572891049436","key":"1"})
  );
});

PencilUnderlinePlain.displayName = 'PencilUnderlinePlain';

export default PencilUnderlinePlain;
export { PencilUnderlinePlain };
