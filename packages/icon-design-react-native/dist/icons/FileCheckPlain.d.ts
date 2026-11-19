import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCheckPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCheckPlain: ForwardRefExoticComponent<FileCheckPlainProps & RefAttributes<Svg>>;

export default FileCheckPlain;
export { FileCheckPlain };
