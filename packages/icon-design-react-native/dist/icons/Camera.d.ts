import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CameraProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Camera: ForwardRefExoticComponent<CameraProps & RefAttributes<Svg>>;

export default Camera;
export { Camera };
