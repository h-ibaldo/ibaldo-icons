import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FunnelPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FunnelPlus: ForwardRefExoticComponent<FunnelPlusProps & RefAttributes<Svg>>;

export default FunnelPlus;
export { FunnelPlus };
