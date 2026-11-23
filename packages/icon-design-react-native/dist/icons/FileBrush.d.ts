import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileBrushProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileBrush: ForwardRefExoticComponent<FileBrushProps & RefAttributes<Svg>>;

export default FileBrush;
export { FileBrush };
