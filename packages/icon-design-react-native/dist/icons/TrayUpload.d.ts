import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayUploadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayUpload: ForwardRefExoticComponent<TrayUploadProps & RefAttributes<Svg>>;

export default TrayUpload;
export { TrayUpload };
