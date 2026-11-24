import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerXStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerXStraight: ForwardRefExoticComponent<PointerXStraightProps & RefAttributes<Svg>>;

export default PointerXStraight;
export { PointerXStraight };
