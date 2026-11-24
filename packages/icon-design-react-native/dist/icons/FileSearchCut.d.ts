import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileSearchCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileSearchCut: ForwardRefExoticComponent<FileSearchCutProps & RefAttributes<Svg>>;

export default FileSearchCut;
export { FileSearchCut };
