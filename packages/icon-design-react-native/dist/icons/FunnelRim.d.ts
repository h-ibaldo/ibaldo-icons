import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FunnelRimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FunnelRim: ForwardRefExoticComponent<FunnelRimProps & RefAttributes<Svg>>;

export default FunnelRim;
export { FunnelRim };
