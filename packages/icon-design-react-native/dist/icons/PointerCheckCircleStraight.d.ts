import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerCheckCircleStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerCheckCircleStraight: ForwardRefExoticComponent<PointerCheckCircleStraightProps & RefAttributes<Svg>>;

export default PointerCheckCircleStraight;
export { PointerCheckCircleStraight };
