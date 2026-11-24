import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCircle: ForwardRefExoticComponent<BellCircleProps & RefAttributes<Svg>>;

export default BellCircle;
export { BellCircle };
