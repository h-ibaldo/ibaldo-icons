import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileWarningPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileWarningPlain: ForwardRefExoticComponent<FileWarningPlainProps & RefAttributes<Svg>>;

export default FileWarningPlain;
export { FileWarningPlain };
