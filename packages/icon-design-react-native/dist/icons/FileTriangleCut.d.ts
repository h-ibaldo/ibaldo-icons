import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileTriangleCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileTriangleCut: ForwardRefExoticComponent<FileTriangleCutProps & RefAttributes<Svg>>;

export default FileTriangleCut;
export { FileTriangleCut };
