import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileJoinedCodeCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileJoinedCodeCut: ForwardRefExoticComponent<FileJoinedCodeCutProps & RefAttributes<Svg>>;

export default FileJoinedCodeCut;
export { FileJoinedCodeCut };
