import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const PencilUnderline = forwardRef(function PencilUnderline(
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
    createElement(Path, {"d":"M21.171573703679314,3.000003160129381l-.000003999999535-.000004000000445c-1.10456839751896-1.104568382121215-2.895427596859008-1.104568375882081-3.99999598667091.000000013938916L2.99999999963984,17.171572891407777l-.99999999927968,4.999999999281499,4.99999999963984-.99999999963984,14.171573717620049-14.171573717620049c1.104568400360222-1.104568400362041,1.104568394119269-2.895427620642295-.000000013940735-3.999996013300006Z","key":"0"}),
    createElement(Line, {"x1":"15","y1":"5.171572890689276","x2":"19.00000000036016","y2":"9.171572891049436","key":"1"}),
    createElement(Line, {"x1":"11","y1":"22.171572891049436","x2":"22","y2":"22.171572891049436","key":"2"})
  );
});

PencilUnderline.displayName = 'PencilUnderline';

export default PencilUnderline;
export { PencilUnderline };
