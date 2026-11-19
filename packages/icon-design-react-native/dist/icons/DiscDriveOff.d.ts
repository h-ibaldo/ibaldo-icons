import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DiscDriveOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DiscDriveOff: ForwardRefExoticComponent<DiscDriveOffProps & RefAttributes<Svg>>;

export default DiscDriveOff;
export { DiscDriveOff };
