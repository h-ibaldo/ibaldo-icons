import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackLockDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackLockDashed: ForwardRefExoticComponent<SquareStackLockDashedProps & RefAttributes<Svg>>;

export default SquareStackLockDashed;
export { SquareStackLockDashed };
