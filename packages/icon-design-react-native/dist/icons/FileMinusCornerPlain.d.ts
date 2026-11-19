import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMinusCornerPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMinusCornerPlain: ForwardRefExoticComponent<FileMinusCornerPlainProps & RefAttributes<Svg>>;

export default FileMinusCornerPlain;
export { FileMinusCornerPlain };
