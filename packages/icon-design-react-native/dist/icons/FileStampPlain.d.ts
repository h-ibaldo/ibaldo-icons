import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStampPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStampPlain: ForwardRefExoticComponent<FileStampPlainProps & RefAttributes<Svg>>;

export default FileStampPlain;
export { FileStampPlain };
