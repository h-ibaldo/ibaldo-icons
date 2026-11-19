import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileSyncPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileSyncPlain: ForwardRefExoticComponent<FileSyncPlainProps & RefAttributes<Svg>>;

export default FileSyncPlain;
export { FileSyncPlain };
