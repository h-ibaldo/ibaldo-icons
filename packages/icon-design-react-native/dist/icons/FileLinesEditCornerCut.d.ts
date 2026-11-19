import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesEditCornerCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesEditCornerCut: ForwardRefExoticComponent<FileLinesEditCornerCutProps & RefAttributes<Svg>>;

export default FileLinesEditCornerCut;
export { FileLinesEditCornerCut };
