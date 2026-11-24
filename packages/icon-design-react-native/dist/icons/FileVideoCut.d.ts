import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileVideoCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileVideoCut: ForwardRefExoticComponent<FileVideoCutProps & RefAttributes<Svg>>;

export default FileVideoCut;
export { FileVideoCut };
