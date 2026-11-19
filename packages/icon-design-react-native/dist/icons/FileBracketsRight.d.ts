import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileBracketsRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileBracketsRight: ForwardRefExoticComponent<FileBracketsRightProps & RefAttributes<Svg>>;

export default FileBracketsRight;
export { FileBracketsRight };
