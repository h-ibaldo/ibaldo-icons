import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCircleOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCircleOff: ForwardRefExoticComponent<BellCircleOffProps & RefAttributes<Svg>>;

export default BellCircleOff;
export { BellCircleOff };
