import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileNetworkPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileNetworkPlain: ForwardRefExoticComponent<FileNetworkPlainProps & RefAttributes<Svg>>;

export default FileNetworkPlain;
export { FileNetworkPlain };
