import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCheckCircleCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCheckCircleCut: ForwardRefExoticComponent<FileCheckCircleCutProps & RefAttributes<Svg>>;

export default FileCheckCircleCut;
export { FileCheckCircleCut };
