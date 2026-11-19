import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesSearchCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesSearchCut: ForwardRefExoticComponent<FileLinesSearchCutProps & RefAttributes<Svg>>;

export default FileLinesSearchCut;
export { FileLinesSearchCut };
