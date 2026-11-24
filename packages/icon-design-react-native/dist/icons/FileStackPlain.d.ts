import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStackPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStackPlain: ForwardRefExoticComponent<FileStackPlainProps & RefAttributes<Svg>>;

export default FileStackPlain;
export { FileStackPlain };
