import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLines: ForwardRefExoticComponent<FileLinesProps & RefAttributes<Svg>>;

export default FileLines;
export { FileLines };
