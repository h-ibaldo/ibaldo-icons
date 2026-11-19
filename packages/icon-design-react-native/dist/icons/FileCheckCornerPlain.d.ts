import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCheckCornerPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCheckCornerPlain: ForwardRefExoticComponent<FileCheckCornerPlainProps & RefAttributes<Svg>>;

export default FileCheckCornerPlain;
export { FileCheckCornerPlain };
