import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileWinkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileWink: ForwardRefExoticComponent<FileWinkProps & RefAttributes<Svg>>;

export default FileWink;
export { FileWink };
