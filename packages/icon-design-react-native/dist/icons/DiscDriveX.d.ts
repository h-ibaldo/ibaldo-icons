import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DiscDriveXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DiscDriveX: ForwardRefExoticComponent<DiscDriveXProps & RefAttributes<Svg>>;

export default DiscDriveX;
export { DiscDriveX };
