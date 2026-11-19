import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerDotsCircleStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerDotsCircleStraight: ForwardRefExoticComponent<PointerDotsCircleStraightProps & RefAttributes<Svg>>;

export default PointerDotsCircleStraight;
export { PointerDotsCircleStraight };
