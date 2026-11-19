import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileXCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileXCorner: ForwardRefExoticComponent<FileXCornerProps & RefAttributes<Svg>>;

export default FileXCorner;
export { FileXCorner };
