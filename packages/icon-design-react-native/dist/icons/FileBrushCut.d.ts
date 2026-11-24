import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileBrushCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileBrushCut: ForwardRefExoticComponent<FileBrushCutProps & RefAttributes<Svg>>;

export default FileBrushCut;
export { FileBrushCut };
