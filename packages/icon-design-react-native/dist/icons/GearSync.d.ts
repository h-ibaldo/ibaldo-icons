import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearSync: ForwardRefExoticComponent<GearSyncProps & RefAttributes<Svg>>;

export default GearSync;
export { GearSync };
