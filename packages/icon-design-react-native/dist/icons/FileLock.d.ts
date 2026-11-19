import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLock: ForwardRefExoticComponent<FileLockProps & RefAttributes<Svg>>;

export default FileLock;
export { FileLock };
