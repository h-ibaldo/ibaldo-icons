import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadCircle: ForwardRefExoticComponent<UploadCircleProps & RefAttributes<Svg>>;

export default UploadCircle;
export { UploadCircle };
