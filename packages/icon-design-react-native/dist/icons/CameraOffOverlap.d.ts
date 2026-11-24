import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CameraOffOverlapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CameraOffOverlap: ForwardRefExoticComponent<CameraOffOverlapProps & RefAttributes<Svg>>;

export default CameraOffOverlap;
export { CameraOffOverlap };
