import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMailPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMailPlain: ForwardRefExoticComponent<FileMailPlainProps & RefAttributes<Svg>>;

export default FileMailPlain;
export { FileMailPlain };
