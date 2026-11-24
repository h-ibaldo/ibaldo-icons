import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FunnelSimpleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FunnelSimple: ForwardRefExoticComponent<FunnelSimpleProps & RefAttributes<Svg>>;

export default FunnelSimple;
export { FunnelSimple };
