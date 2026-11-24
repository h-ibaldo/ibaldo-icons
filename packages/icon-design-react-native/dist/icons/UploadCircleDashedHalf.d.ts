import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadCircleDashedHalfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadCircleDashedHalf: ForwardRefExoticComponent<UploadCircleDashedHalfProps & RefAttributes<Svg>>;

export default UploadCircleDashedHalf;
export { UploadCircleDashedHalf };
