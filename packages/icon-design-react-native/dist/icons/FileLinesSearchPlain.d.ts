import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesSearchPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesSearchPlain: ForwardRefExoticComponent<FileLinesSearchPlainProps & RefAttributes<Svg>>;

export default FileLinesSearchPlain;
export { FileLinesSearchPlain };
