import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudUploadTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudUploadTall: ForwardRefExoticComponent<CloudUploadTallProps & RefAttributes<Svg>>;

export default CloudUploadTall;
export { CloudUploadTall };
