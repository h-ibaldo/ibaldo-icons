import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileEditCornerCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileEditCornerCut: ForwardRefExoticComponent<FileEditCornerCutProps & RefAttributes<Svg>>;

export default FileEditCornerCut;
export { FileEditCornerCut };
