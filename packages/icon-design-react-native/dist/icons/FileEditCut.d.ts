import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileEditCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileEditCut: ForwardRefExoticComponent<FileEditCutProps & RefAttributes<Svg>>;

export default FileEditCut;
export { FileEditCut };
