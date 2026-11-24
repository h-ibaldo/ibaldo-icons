import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileImageCornerCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileImageCornerCut: ForwardRefExoticComponent<FileImageCornerCutProps & RefAttributes<Svg>>;

export default FileImageCornerCut;
export { FileImageCornerCut };
