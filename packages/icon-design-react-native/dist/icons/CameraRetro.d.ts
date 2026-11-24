import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CameraRetroProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CameraRetro: ForwardRefExoticComponent<CameraRetroProps & RefAttributes<Svg>>;

export default CameraRetro;
export { CameraRetro };
