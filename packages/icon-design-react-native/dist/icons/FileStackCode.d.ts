import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStackCodeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStackCode: ForwardRefExoticComponent<FileStackCodeProps & RefAttributes<Svg>>;

export default FileStackCode;
export { FileStackCode };
