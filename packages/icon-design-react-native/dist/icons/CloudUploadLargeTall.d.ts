import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudUploadLargeTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudUploadLargeTall: ForwardRefExoticComponent<CloudUploadLargeTallProps & RefAttributes<Svg>>;

export default CloudUploadLargeTall;
export { CloudUploadLargeTall };
