import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearClusterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearCluster: ForwardRefExoticComponent<GearClusterProps & RefAttributes<Svg>>;

export default GearCluster;
export { GearCluster };
