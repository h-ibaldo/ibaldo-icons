import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AsteriskCircleTurnedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AsteriskCircleTurned: ForwardRefExoticComponent<AsteriskCircleTurnedProps & RefAttributes<Svg>>;

export default AsteriskCircleTurned;
export { AsteriskCircleTurned };
