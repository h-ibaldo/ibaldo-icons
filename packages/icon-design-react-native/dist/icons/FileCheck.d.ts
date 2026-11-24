import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCheck: ForwardRefExoticComponent<FileCheckProps & RefAttributes<Svg>>;

export default FileCheck;
export { FileCheck };
