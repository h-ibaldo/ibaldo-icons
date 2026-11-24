import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CameraCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CameraCompact: ForwardRefExoticComponent<CameraCompactProps & RefAttributes<Svg>>;

export default CameraCompact;
export { CameraCompact };
