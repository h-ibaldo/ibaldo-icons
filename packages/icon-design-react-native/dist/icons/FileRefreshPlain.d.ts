import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileRefreshPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileRefreshPlain: ForwardRefExoticComponent<FileRefreshPlainProps & RefAttributes<Svg>>;

export default FileRefreshPlain;
export { FileRefreshPlain };
