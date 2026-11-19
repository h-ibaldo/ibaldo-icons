import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMinusCircleCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMinusCircleCut: ForwardRefExoticComponent<FileMinusCircleCutProps & RefAttributes<Svg>>;

export default FileMinusCircleCut;
export { FileMinusCircleCut };
