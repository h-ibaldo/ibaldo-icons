import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileEditPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileEditPlain: ForwardRefExoticComponent<FileEditPlainProps & RefAttributes<Svg>>;

export default FileEditPlain;
export { FileEditPlain };
