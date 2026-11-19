import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadCircleDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadCircleDashed: ForwardRefExoticComponent<UploadCircleDashedProps & RefAttributes<Svg>>;

export default UploadCircleDashed;
export { UploadCircleDashed };
