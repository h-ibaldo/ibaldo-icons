import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesEditCornerPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesEditCornerPlain: ForwardRefExoticComponent<FileLinesEditCornerPlainProps & RefAttributes<Svg>>;

export default FileLinesEditCornerPlain;
export { FileLinesEditCornerPlain };
