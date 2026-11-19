import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileXCornerPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileXCornerPlain: ForwardRefExoticComponent<FileXCornerPlainProps & RefAttributes<Svg>>;

export default FileXCornerPlain;
export { FileXCornerPlain };
