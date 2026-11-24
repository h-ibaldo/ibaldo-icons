import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowUpCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowUpCorner: ForwardRefExoticComponent<FileArrowUpCornerProps & RefAttributes<Svg>>;

export default FileArrowUpCorner;
export { FileArrowUpCorner };
