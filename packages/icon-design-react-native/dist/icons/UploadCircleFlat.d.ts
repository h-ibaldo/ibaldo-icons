import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadCircleFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadCircleFlat: ForwardRefExoticComponent<UploadCircleFlatProps & RefAttributes<Svg>>;

export default UploadCircleFlat;
export { UploadCircleFlat };
