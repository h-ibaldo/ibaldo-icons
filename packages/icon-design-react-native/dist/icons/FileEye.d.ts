import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileEyeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileEye: ForwardRefExoticComponent<FileEyeProps & RefAttributes<Svg>>;

export default FileEye;
export { FileEye };
