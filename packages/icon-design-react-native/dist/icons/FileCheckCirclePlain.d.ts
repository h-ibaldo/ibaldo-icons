import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCheckCirclePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCheckCirclePlain: ForwardRefExoticComponent<FileCheckCirclePlainProps & RefAttributes<Svg>>;

export default FileCheckCirclePlain;
export { FileCheckCirclePlain };
