import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileRefreshProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileRefresh: ForwardRefExoticComponent<FileRefreshProps & RefAttributes<Svg>>;

export default FileRefresh;
export { FileRefresh };
