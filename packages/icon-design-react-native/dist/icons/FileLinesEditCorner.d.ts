import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesEditCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesEditCorner: ForwardRefExoticComponent<FileLinesEditCornerProps & RefAttributes<Svg>>;

export default FileLinesEditCorner;
export { FileLinesEditCorner };
