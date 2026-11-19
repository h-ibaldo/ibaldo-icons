import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileSearchPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileSearchPlain: ForwardRefExoticComponent<FileSearchPlainProps & RefAttributes<Svg>>;

export default FileSearchPlain;
export { FileSearchPlain };
