import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileZipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileZip: ForwardRefExoticComponent<FileZipProps & RefAttributes<Svg>>;

export default FileZip;
export { FileZip };
