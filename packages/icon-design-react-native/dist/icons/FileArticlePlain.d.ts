import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArticlePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArticlePlain: ForwardRefExoticComponent<FileArticlePlainProps & RefAttributes<Svg>>;

export default FileArticlePlain;
export { FileArticlePlain };
