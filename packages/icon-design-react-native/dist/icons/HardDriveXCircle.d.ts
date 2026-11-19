import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HardDriveXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HardDriveXCircle: ForwardRefExoticComponent<HardDriveXCircleProps & RefAttributes<Svg>>;

export default HardDriveXCircle;
export { HardDriveXCircle };
