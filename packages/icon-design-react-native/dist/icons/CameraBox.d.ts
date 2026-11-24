import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CameraBoxProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CameraBox: ForwardRefExoticComponent<CameraBoxProps & RefAttributes<Svg>>;

export default CameraBox;
export { CameraBox };
