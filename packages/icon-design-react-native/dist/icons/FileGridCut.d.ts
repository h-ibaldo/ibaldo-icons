import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileGridCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileGridCut: ForwardRefExoticComponent<FileGridCutProps & RefAttributes<Svg>>;

export default FileGridCut;
export { FileGridCut };
