import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearSyncLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearSyncLarge: ForwardRefExoticComponent<GearSyncLargeProps & RefAttributes<Svg>>;

export default GearSyncLarge;
export { GearSyncLarge };
