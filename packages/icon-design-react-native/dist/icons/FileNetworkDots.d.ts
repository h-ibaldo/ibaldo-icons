import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileNetworkDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileNetworkDots: ForwardRefExoticComponent<FileNetworkDotsProps & RefAttributes<Svg>>;

export default FileNetworkDots;
export { FileNetworkDots };
