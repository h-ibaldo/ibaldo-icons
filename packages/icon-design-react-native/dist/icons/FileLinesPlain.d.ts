import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesPlain: ForwardRefExoticComponent<FileLinesPlainProps & RefAttributes<Svg>>;

export default FileLinesPlain;
export { FileLinesPlain };
