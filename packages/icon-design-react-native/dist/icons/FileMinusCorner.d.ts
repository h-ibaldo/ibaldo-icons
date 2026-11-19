import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMinusCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMinusCorner: ForwardRefExoticComponent<FileMinusCornerProps & RefAttributes<Svg>>;

export default FileMinusCorner;
export { FileMinusCorner };
