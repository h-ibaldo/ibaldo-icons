import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowBendCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowBendCut: ForwardRefExoticComponent<FileArrowBendCutProps & RefAttributes<Svg>>;

export default FileArrowBendCut;
export { FileArrowBendCut };
