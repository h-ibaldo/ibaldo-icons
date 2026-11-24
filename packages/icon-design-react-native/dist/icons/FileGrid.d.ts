import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileGridProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileGrid: ForwardRefExoticComponent<FileGridProps & RefAttributes<Svg>>;

export default FileGrid;
export { FileGrid };
