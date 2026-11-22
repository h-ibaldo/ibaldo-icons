import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMusicProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMusic: ForwardRefExoticComponent<FileMusicProps & RefAttributes<Svg>>;

export default FileMusic;
export { FileMusic };
