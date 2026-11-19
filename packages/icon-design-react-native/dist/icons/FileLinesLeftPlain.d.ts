import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesLeftPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesLeftPlain: ForwardRefExoticComponent<FileLinesLeftPlainProps & RefAttributes<Svg>>;

export default FileLinesLeftPlain;
export { FileLinesLeftPlain };
