import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileSearch: ForwardRefExoticComponent<FileSearchProps & RefAttributes<Svg>>;

export default FileSearch;
export { FileSearch };
