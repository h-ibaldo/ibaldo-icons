import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDashed: ForwardRefExoticComponent<ClockDashedProps & RefAttributes<Svg>>;

export default ClockDashed;
export { ClockDashed };
