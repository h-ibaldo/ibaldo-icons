import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerCheckStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerCheckStraight: ForwardRefExoticComponent<PointerCheckStraightProps & RefAttributes<Svg>>;

export default PointerCheckStraight;
export { PointerCheckStraight };
