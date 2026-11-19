import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesEditCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesEditCut: ForwardRefExoticComponent<FileLinesEditCutProps & RefAttributes<Svg>>;

export default FileLinesEditCut;
export { FileLinesEditCut };
