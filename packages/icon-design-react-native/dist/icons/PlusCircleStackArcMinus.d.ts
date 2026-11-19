import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlusCircleStackArcMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlusCircleStackArcMinus: ForwardRefExoticComponent<PlusCircleStackArcMinusProps & RefAttributes<Svg>>;

export default PlusCircleStackArcMinus;
export { PlusCircleStackArcMinus };
