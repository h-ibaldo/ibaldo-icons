import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadBoxProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadBox: ForwardRefExoticComponent<UploadBoxProps & RefAttributes<Svg>>;

export default UploadBox;
export { UploadBox };
