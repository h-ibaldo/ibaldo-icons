import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileTriangle: ForwardRefExoticComponent<FileTriangleProps & RefAttributes<Svg>>;

export default FileTriangle;
export { FileTriangle };
