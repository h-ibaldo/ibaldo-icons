import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CameraDetailedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CameraDetailed: ForwardRefExoticComponent<CameraDetailedProps & RefAttributes<Svg>>;

export default CameraDetailed;
export { CameraDetailed };
