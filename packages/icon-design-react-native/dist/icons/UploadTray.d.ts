import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadTrayProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadTray: ForwardRefExoticComponent<UploadTrayProps & RefAttributes<Svg>>;

export default UploadTray;
export { UploadTray };
