import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStackCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStackCut: ForwardRefExoticComponent<FileStackCutProps & RefAttributes<Svg>>;

export default FileStackCut;
export { FileStackCut };
