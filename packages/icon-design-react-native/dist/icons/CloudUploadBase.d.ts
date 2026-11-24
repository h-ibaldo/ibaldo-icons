import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudUploadBaseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudUploadBase: ForwardRefExoticComponent<CloudUploadBaseProps & RefAttributes<Svg>>;

export default CloudUploadBase;
export { CloudUploadBase };
