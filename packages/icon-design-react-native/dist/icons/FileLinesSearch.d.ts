import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesSearch: ForwardRefExoticComponent<FileLinesSearchProps & RefAttributes<Svg>>;

export default FileLinesSearch;
export { FileLinesSearch };
