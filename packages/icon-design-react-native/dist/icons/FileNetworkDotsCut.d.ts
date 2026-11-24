import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileNetworkDotsCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileNetworkDotsCut: ForwardRefExoticComponent<FileNetworkDotsCutProps & RefAttributes<Svg>>;

export default FileNetworkDotsCut;
export { FileNetworkDotsCut };
