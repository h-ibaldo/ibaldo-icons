import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLockPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLockPlain: ForwardRefExoticComponent<FileLockPlainProps & RefAttributes<Svg>>;

export default FileLockPlain;
export { FileLockPlain };
