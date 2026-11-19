import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HardDriveXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HardDriveX: ForwardRefExoticComponent<HardDriveXProps & RefAttributes<Svg>>;

export default HardDriveX;
export { HardDriveX };
