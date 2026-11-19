import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileXCircleCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileXCircleCut: ForwardRefExoticComponent<FileXCircleCutProps & RefAttributes<Svg>>;

export default FileXCircleCut;
export { FileXCircleCut };
