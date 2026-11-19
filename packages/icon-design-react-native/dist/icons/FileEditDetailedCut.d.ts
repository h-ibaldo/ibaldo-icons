import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileEditDetailedCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileEditDetailedCut: ForwardRefExoticComponent<FileEditDetailedCutProps & RefAttributes<Svg>>;

export default FileEditDetailedCut;
export { FileEditDetailedCut };
