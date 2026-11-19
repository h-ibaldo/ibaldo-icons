import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudUploadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudUpload: ForwardRefExoticComponent<CloudUploadProps & RefAttributes<Svg>>;

export default CloudUpload;
export { CloudUpload };
