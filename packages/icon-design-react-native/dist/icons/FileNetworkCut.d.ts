import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileNetworkCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileNetworkCut: ForwardRefExoticComponent<FileNetworkCutProps & RefAttributes<Svg>>;

export default FileNetworkCut;
export { FileNetworkCut };
