import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileWinkCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileWinkCut: ForwardRefExoticComponent<FileWinkCutProps & RefAttributes<Svg>>;

export default FileWinkCut;
export { FileWinkCut };
