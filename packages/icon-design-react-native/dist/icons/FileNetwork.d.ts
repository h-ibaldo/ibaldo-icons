import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileNetworkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileNetwork: ForwardRefExoticComponent<FileNetworkProps & RefAttributes<Svg>>;

export default FileNetwork;
export { FileNetwork };
