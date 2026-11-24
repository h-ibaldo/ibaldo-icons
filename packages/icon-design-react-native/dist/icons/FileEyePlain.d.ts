import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileEyePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileEyePlain: ForwardRefExoticComponent<FileEyePlainProps & RefAttributes<Svg>>;

export default FileEyePlain;
export { FileEyePlain };
