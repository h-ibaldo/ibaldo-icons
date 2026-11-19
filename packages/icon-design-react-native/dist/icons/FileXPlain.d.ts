import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileXPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileXPlain: ForwardRefExoticComponent<FileXPlainProps & RefAttributes<Svg>>;

export default FileXPlain;
export { FileXPlain };
