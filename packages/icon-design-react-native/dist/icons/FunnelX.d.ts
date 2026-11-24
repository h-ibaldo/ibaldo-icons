import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FunnelXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FunnelX: ForwardRefExoticComponent<FunnelXProps & RefAttributes<Svg>>;

export default FunnelX;
export { FunnelX };
