import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileEditCornerPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileEditCornerPlain: ForwardRefExoticComponent<FileEditCornerPlainProps & RefAttributes<Svg>>;

export default FileEditCornerPlain;
export { FileEditCornerPlain };
