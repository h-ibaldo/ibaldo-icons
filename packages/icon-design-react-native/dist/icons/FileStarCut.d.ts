import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStarCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStarCut: ForwardRefExoticComponent<FileStarCutProps & RefAttributes<Svg>>;

export default FileStarCut;
export { FileStarCut };
