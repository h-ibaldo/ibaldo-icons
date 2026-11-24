import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoltOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoltOff: ForwardRefExoticComponent<BoltOffProps & RefAttributes<Svg>>;

export default BoltOff;
export { BoltOff };
