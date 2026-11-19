import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FunnelOvalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FunnelOval: ForwardRefExoticComponent<FunnelOvalProps & RefAttributes<Svg>>;

export default FunnelOval;
export { FunnelOval };
