import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesEditPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesEditPlain: ForwardRefExoticComponent<FileLinesEditPlainProps & RefAttributes<Svg>>;

export default FileLinesEditPlain;
export { FileLinesEditPlain };
