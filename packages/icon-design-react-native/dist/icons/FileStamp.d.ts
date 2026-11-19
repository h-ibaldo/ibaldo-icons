import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStampProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStamp: ForwardRefExoticComponent<FileStampProps & RefAttributes<Svg>>;

export default FileStamp;
export { FileStamp };
