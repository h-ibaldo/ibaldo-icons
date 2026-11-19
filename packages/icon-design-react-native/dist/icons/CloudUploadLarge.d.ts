import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudUploadLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudUploadLarge: ForwardRefExoticComponent<CloudUploadLargeProps & RefAttributes<Svg>>;

export default CloudUploadLarge;
export { CloudUploadLarge };
