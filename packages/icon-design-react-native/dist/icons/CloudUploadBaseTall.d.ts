import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudUploadBaseTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudUploadBaseTall: ForwardRefExoticComponent<CloudUploadBaseTallProps & RefAttributes<Svg>>;

export default CloudUploadBaseTall;
export { CloudUploadBaseTall };
