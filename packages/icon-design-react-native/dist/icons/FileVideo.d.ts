import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileVideoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileVideo: ForwardRefExoticComponent<FileVideoProps & RefAttributes<Svg>>;

export default FileVideo;
export { FileVideo };
