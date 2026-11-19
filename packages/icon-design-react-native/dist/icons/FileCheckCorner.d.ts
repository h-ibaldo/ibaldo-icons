import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCheckCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCheckCorner: ForwardRefExoticComponent<FileCheckCornerProps & RefAttributes<Svg>>;

export default FileCheckCorner;
export { FileCheckCorner };
