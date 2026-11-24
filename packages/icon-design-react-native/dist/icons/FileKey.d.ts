import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileKeyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileKey: ForwardRefExoticComponent<FileKeyProps & RefAttributes<Svg>>;

export default FileKey;
export { FileKey };
