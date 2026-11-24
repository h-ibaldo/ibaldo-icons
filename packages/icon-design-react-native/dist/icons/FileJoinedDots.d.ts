import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileJoinedDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileJoinedDots: ForwardRefExoticComponent<FileJoinedDotsProps & RefAttributes<Svg>>;

export default FileJoinedDots;
export { FileJoinedDots };
