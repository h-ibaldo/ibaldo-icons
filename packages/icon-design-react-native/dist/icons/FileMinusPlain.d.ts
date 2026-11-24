import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMinusPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMinusPlain: ForwardRefExoticComponent<FileMinusPlainProps & RefAttributes<Svg>>;

export default FileMinusPlain;
export { FileMinusPlain };
