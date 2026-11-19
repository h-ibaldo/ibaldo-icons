import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesDashedCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesDashedCut: ForwardRefExoticComponent<FileLinesDashedCutProps & RefAttributes<Svg>>;

export default FileLinesDashedCut;
export { FileLinesDashedCut };
